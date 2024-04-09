import dayjs from "dayjs";
import React, { useCallback, useContext, useEffect, useRef } from "react";

import { BORDER_COLOR, DATE_FORMAT, RING_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { dateIsValid, parseFormattedDate } from "../helpers";

import ToggleButton from "./ToggleButton";

type Props = {
    setContextRef?: (ref: React.RefObject<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (e: Props) => {
    // Context
    const {
        primaryColor,
        period,
        dayHover,
        changeDayHover,
        calendarContainer,
        arrowContainer,
        inputText,
        changeInputText,
        hideDatepicker,
        changeDatepickerValue,
        asSingle,
        placeholder,
        separator,
        disabled,
        inputClassName,
        toggleClassName,
        toggleIcon,
        readOnly,
        displayFormat,
        inputId,
        inputName,
        classNames,
        popoverDirection
    } = useContext(DatepickerContext);

    // UseRefs
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Functions
    const getClassName = useCallback(() => {
        const input = inputRef.current;

        if (input && typeof classNames !== "undefined" && typeof classNames?.input === "function") {
            return classNames.input(input);
        }

        const border = BORDER_COLOR.focus[primaryColor as keyof typeof BORDER_COLOR.focus];
        const ring =
            RING_COLOR["second-focus"][primaryColor as keyof (typeof RING_COLOR)["second-focus"]];

        const defaultInputClassName = `tw-relative tw-transition-all tw-duration-300 tw-py-2.5 tw-pl-4 tw-pr-14 tw-w-full tw-border-gray-300 dark:tw-bg-slate-800 dark:tw-text-white/80 dark:tw-border-slate-600 tw-rounded-lg tw-tracking-wide tw-font-light tw-text-sm tw-placeholder-gray-400 tw-bg-white tw-focus:tw-ring tw-disabled:tw-opacity-40 tw-disabled:tw-cursor-not-allowed ${border} ${ring}`;

        return typeof inputClassName === "function"
            ? inputClassName(defaultInputClassName)
            : typeof inputClassName === "string" && inputClassName !== ""
            ? inputClassName
            : defaultInputClassName;
    }, [inputRef, classNames, primaryColor, inputClassName]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            const dates = [];

            if (asSingle) {
                const date = parseFormattedDate(inputValue, displayFormat);
                if (dateIsValid(date.toDate())) {
                    dates.push(date.format(DATE_FORMAT));
                }
            } else {
                const parsed = inputValue.split(separator);

                let startDate = null;
                let endDate = null;

                if (parsed.length === 2) {
                    startDate = parseFormattedDate(parsed[0], displayFormat);
                    endDate = parseFormattedDate(parsed[1], displayFormat);
                } else {
                    const middle = Math.floor(inputValue.length / 2);
                    startDate = parseFormattedDate(inputValue.slice(0, middle), displayFormat);
                    endDate = parseFormattedDate(inputValue.slice(middle), displayFormat);
                }

                if (
                    dateIsValid(startDate.toDate()) &&
                    dateIsValid(endDate.toDate()) &&
                    startDate.isBefore(endDate)
                ) {
                    dates.push(startDate.format(DATE_FORMAT));
                    dates.push(endDate.format(DATE_FORMAT));
                }
            }

            if (dates[0]) {
                changeDatepickerValue(
                    {
                        startDate: dates[0],
                        endDate: dates[1] || dates[0]
                    },
                    e.target
                );
                if (dates[1]) changeDayHover(dayjs(dates[1]).add(-1, "day").format(DATE_FORMAT));
                else changeDayHover(dates[0]);
            }

            changeInputText(e.target.value);
        },
        [asSingle, displayFormat, separator, changeDatepickerValue, changeDayHover, changeInputText]
    );

    const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                const input = inputRef.current;
                if (input) {
                    input.blur();
                }
                hideDatepicker();
            }
        },
        [hideDatepicker]
    );

    const renderToggleIcon = useCallback(
        (isEmpty: boolean) => {
            return typeof toggleIcon === "undefined" ? (
                <ToggleButton isEmpty={isEmpty} />
            ) : (
                toggleIcon(isEmpty)
            );
        },
        [toggleIcon]
    );

    const getToggleClassName = useCallback(() => {
        const button = buttonRef.current;

        if (
            button &&
            typeof classNames !== "undefined" &&
            typeof classNames?.toggleButton === "function"
        ) {
            return classNames.toggleButton(button);
        }

        const defaultToggleClassName =
            "tw-absolute tw-right-0 tw-h-full tw-px-3 tw-text-gray-400 tw-focus:tw-outline-none tw-disabled:tw-opacity-40 tw-disabled:tw-cursor-not-allowed";

        return typeof toggleClassName === "function"
            ? toggleClassName(defaultToggleClassName)
            : typeof toggleClassName === "string" && toggleClassName !== ""
            ? toggleClassName
            : defaultToggleClassName;
    }, [toggleClassName, buttonRef, classNames]);

    // UseEffects && UseLayoutEffect
    useEffect(() => {
        if (inputRef && e.setContextRef && typeof e.setContextRef === "function") {
            e.setContextRef(inputRef);
        }
    }, [e, inputRef]);

    useEffect(() => {
        const button = buttonRef?.current;

        function focusInput(e: Event) {
            e.stopPropagation();
            const input = inputRef.current;

            if (input) {
                input.focus();
                if (inputText) {
                    changeInputText("");
                    if (dayHover) {
                        changeDayHover(null);
                    }
                    if (period.start && period.end) {
                        changeDatepickerValue(
                            {
                                startDate: null,
                                endDate: null
                            },
                            input
                        );
                    }
                }
            }
        }

        if (button) {
            button.addEventListener("click", focusInput);
        }

        return () => {
            if (button) {
                button.removeEventListener("click", focusInput);
            }
        };
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        dayHover,
        inputText,
        period.end,
        period.start,
        inputRef
    ]);

    useEffect(() => {
        const div = calendarContainer?.current;
        const input = inputRef.current;
        const arrow = arrowContainer?.current;

        function showCalendarContainer() {
            if (arrow && div && div.classList.contains("tw-hidden")) {
                div.classList.remove("tw-hidden");
                div.classList.add("tw-block");

                // window.innerWidth === 767
                const popoverOnUp = popoverDirection == "up";
                const popoverOnDown = popoverDirection === "down";
                if (
                    popoverOnUp ||
                    (window.innerWidth > 767 &&
                        window.screen.height - 100 < div.getBoundingClientRect().bottom &&
                        !popoverOnDown)
                ) {
                    div.classList.add("tw-bottom-full");
                    div.classList.add("tw-mb-2.5");
                    div.classList.remove("tw-mt-2.5");
                    arrow.classList.add("-tw-bottom-2");
                    arrow.classList.add("tw-border-r");
                    arrow.classList.add("tw-border-b");
                    arrow.classList.remove("tw-border-l");
                    arrow.classList.remove("tw-border-t");
                }

                setTimeout(() => {
                    div.classList.remove("tw-translate-y-4");
                    div.classList.remove("tw-opacity-0");
                    div.classList.add("tw-translate-y-0");
                    div.classList.add("tw-opacity-1");
                }, 1);
            }
        }

        if (div && input) {
            input.addEventListener("focus", showCalendarContainer);
        }

        return () => {
            if (input) {
                input.removeEventListener("focus", showCalendarContainer);
            }
        };
    }, [calendarContainer, arrowContainer, popoverDirection]);
    return (
        <>
            <input
                ref={inputRef}
                type="text"
                className={getClassName()}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={
                    placeholder
                        ? placeholder
                        : `${displayFormat}${asSingle ? "" : ` ${separator} ${displayFormat}`}`
                }
                value={inputText}
                id={inputId}
                name={inputName}
                autoComplete="off"
                role="presentation"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            <button
                type="button"
                ref={buttonRef}
                disabled={disabled}
                className={getToggleClassName()}
            >
                {renderToggleIcon(inputText == null || !inputText?.length)}
            </button>
        </>
    );
};

export default Input;
