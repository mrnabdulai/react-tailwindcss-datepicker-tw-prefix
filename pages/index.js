import dayjs from "dayjs";
import Head from "next/head";
import { useState } from "react";

import Datepicker from "../src";
import { COLORS, DATE_LOOKING_OPTIONS } from "../src/constants";

export default function Playground() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [primaryColor, setPrimaryColor] = useState("blue");
    const [useRange, setUseRange] = useState(true);
    const [showFooter, setShowFooter] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [asSingle, setAsSingle] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const [separator, setSeparator] = useState("~");
    const [i18n, setI18n] = useState("en");
    const [disabled, setDisabled] = useState(false);
    const [inputClassName, setInputClassName] = useState("");
    const [containerClassName, setContainerClassName] = useState("");
    const [toggleClassName, setToggleClassName] = useState("");
    const [displayFormat, setDisplayFormat] = useState("YYYY-MM-DD");
    const [readOnly, setReadOnly] = useState(false);
    const [minDate, setMinDate] = useState("");
    const [maxDate, setMaxDate] = useState("");
    const [dateLooking, setDateLooking] = useState(true);
    const [disabledDates, setDisabledDates] = useState([]);
    const [newDisabledDates, setNewDisabledDates] = useState({ startDate: "", endDate: "" });
    const [startFrom, setStartFrom] = useState("2023-03-01");
    const [startWeekOn, setStartWeekOn] = useState("");

    const handleChange = (value, e) => {
        setValue(value);
        console.log(e);
        console.log("value", value);
    };
    return (
        <div className="tw-px-4 tw-py-8">
            <Head>
                <title>react-tailwindcss-datepicker PlayGround</title>
            </Head>
            <h1 className="tw-text-center tw-font-semibold tw-text-xl">
                <pre className="tw-text-gray-600 tw-text-lg tw-bg-gray-200 tw-max-w-max tw-mx-auto tw-px-2 tw-rounded">
                    react-tailwindcss-datepicker
                </pre>
                <span className="tw-text-gray-700">PlayGround</span>
            </h1>

            <div className="tw-max-w-md tw-mx-auto tw-my-4">
                <Datepicker
                    value={value}
                    primaryColor={primaryColor}
                    onChange={handleChange}
                    useRange={useRange}
                    showFooter={showFooter}
                    showShortcuts={showShortcuts}
                    configs={{
                        shortcuts: {
                            today: "TText",
                            yesterday: "YText",
                            past: period => `P-${period} Text`,
                            currentMonth: "CMText",
                            pastMonth: "PMText",
                            last3Days: {
                                text: "Last 3 days",
                                period: {
                                    start: new Date(new Date().setDate(new Date().getDate() - 3)),
                                    end: new Date()
                                }
                            },
                            thisDay: {
                                text: "This Day",
                                period: {
                                    start: new Date(),
                                    end: new Date()
                                }
                            },
                            next8Days: {
                                text: "Next 8 days",
                                period: {
                                    start: new Date(),
                                    end: new Date(new Date().setDate(new Date().getDate() + 8))
                                }
                            }
                        },
                        footer: {
                            cancel: "CText",
                            apply: "AText"
                        }
                    }}
                    asSingle={asSingle}
                    placeholder={placeholder}
                    separator={separator}
                    startFrom={
                        startFrom.length && dayjs(startFrom).isValid() ? new Date(startFrom) : null
                    }
                    i18n={i18n}
                    disabled={disabled}
                    inputClassName={inputClassName}
                    containerClassName={containerClassName}
                    toggleClassName={toggleClassName}
                    displayFormat={displayFormat}
                    readOnly={readOnly}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateLooking={dateLooking}
                    disabledDates={disabledDates}
                    startWeekOn={startWeekOn}
                    toggleIcon={isEmpty => {
                        return isEmpty ? "Select Date" : "Clear";
                    }}
                    popoverDirection={"down"}
                />
            </div>
            <div className="tw-py-4 tw-max-w-3xl tw-mx-auto tw-flex tw-flex-row tw-flex-wrap">
                <div className="tw-w-full sm:tw-w-1/3 tw-pr-2 tw-flex tw-flex-row tw-flex-wrap sm:tw-flex-col">
                    <div className="tw-mb-2 tw-w-1/2 sm:tw-w-full">
                        <div className="tw-inline-flex tw-items-center">
                            <input
                                type="checkbox"
                                className="tw-mr-2 tw-rounded"
                                id="useRange"
                                checked={useRange}
                                onChange={e => setUseRange(e.target.checked)}
                            />
                            <label className="tw-block" htmlFor="useRange">
                                Use Range
                            </label>
                        </div>
                    </div>
                    <div className="tw-mb-2 tw-w-1/2 sm:tw-w-full">
                        <div className="tw-inline-flex tw-items-center">
                            <input
                                type="checkbox"
                                className="tw-mr-2 tw-rounded"
                                id="showFooter"
                                checked={showFooter}
                                onChange={e => setShowFooter(e.target.checked)}
                            />
                            <label className="tw-block" htmlFor="showFooter">
                                Show Footer
                            </label>
                        </div>
                    </div>
                    <div className="tw-mb-2 tw-w-1/2 sm:tw-w-full">
                        <div className="tw-inline-flex tw-items-center">
                            <input
                                type="checkbox"
                                className="tw-mr-2 tw-rounded"
                                id="showShortcuts"
                                checked={showShortcuts}
                                onChange={e => setShowShortcuts(e.target.checked)}
                            />
                            <label className="tw-block" htmlFor="showShortcuts">
                                Show Shortcuts
                            </label>
                        </div>
                    </div>
                    <div className="tw-mb-2 tw-w-1/2 sm:tw-w-full">
                        <div className="tw-inline-flex tw-items-center">
                            <input
                                type="checkbox"
                                className="tw-mr-2 tw-rounded"
                                id="asSingle"
                                checked={asSingle}
                                onChange={e => setAsSingle(e.target.checked)}
                            />
                            <label className="tw-block" htmlFor="asSingle">
                                As Single
                            </label>
                        </div>
                    </div>
                    <div className="tw-mb-2 tw-w-1/2 sm:tw-w-full">
                        <div className="tw-inline-flex tw-items-center">
                            <input
                                type="checkbox"
                                className="tw-mr-2 tw-rounded"
                                id="disabled"
                                checked={disabled}
                                onChange={e => setDisabled(e.target.checked)}
                            />
                            <label className="tw-block" htmlFor="disabled">
                                Disabled
                            </label>
                        </div>
                    </div>
                    <div className="tw-mb-2 tw-w-1/2 sm:tw-w-full">
                        <div className="tw-inline-flex tw-items-center">
                            <input
                                type="checkbox"
                                className="tw-mr-2 tw-rounded"
                                id="readOnly"
                                checked={readOnly}
                                onChange={e => setReadOnly(e.target.checked)}
                            />
                            <label className="tw-block" htmlFor="readOnly">
                                Read Only
                            </label>
                        </div>
                    </div>
                </div>
                <div className="tw-w-full sm:tw-w-1/3 tw-pr-2 tw-flex tw-flex-col">
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="primaryColor">
                            Primary Color
                        </label>
                        <select
                            className="tw-rounded tw-block tw-w-full tw-border-gray-200 tw-border tw-px-4 tw-py-2"
                            id="primaryColor"
                            value={primaryColor}
                            onChange={e => {
                                setPrimaryColor(e.target.value);
                            }}
                        >
                            {COLORS.map((color, i) => (
                                <option key={i} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="placeholder">
                            Placeholder
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="placeholder"
                            value={placeholder}
                            onChange={e => {
                                setPlaceholder(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="separator">
                            Separator
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="separator"
                            value={separator}
                            onChange={e => {
                                setSeparator(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="startFrom">
                            Start From
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="startFrom"
                            value={startFrom}
                            onChange={e => {
                                setStartFrom(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="minDate">
                            Minimum Date
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="minDate"
                            value={minDate}
                            onChange={e => {
                                setMinDate(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="maxDate">
                            Maximum Date
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="maxDate"
                            value={maxDate}
                            onChange={e => {
                                setMaxDate(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="dateLooking">
                            Date Looking
                        </label>
                        <select
                            className="tw-rounded tw-block tw-w-full tw-border-gray-200 tw-border tw-px-4 tw-py-2"
                            id="dateLooking"
                            value={dateLooking}
                            onChange={e => {
                                setDateLooking(e.target.value);
                            }}
                        >
                            {DATE_LOOKING_OPTIONS.map((option, i) => (
                                <option key={i} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="tw-w-full sm:tw-w-1/3 tw-pr-2 tw-flex tw-flex-col">
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="i18n">
                            i18n
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="i18n"
                            value={i18n}
                            onChange={e => {
                                setI18n(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="displayFormat">
                            Display Format
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="displayFormat"
                            value={displayFormat}
                            onChange={e => {
                                setDisplayFormat(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="inputClassName">
                            Input Class
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="inputClassName"
                            value={inputClassName}
                            onChange={e => {
                                setInputClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="containerClassName">
                            Container Class
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="containerClassName"
                            value={containerClassName}
                            onChange={e => {
                                setContainerClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="containerClassName">
                            Toggle Class
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="toggleClassName"
                            value={toggleClassName}
                            onChange={e => {
                                setToggleClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="tw-mb-2">
                        <label className="tw-block" htmlFor="startWeekOnClassName">
                            Start Week On
                        </label>
                        <input
                            className="tw-rounded tw-border tw-px-4 tw-py-2 tw-w-full tw-border-gray-200"
                            id="startWeekOnClassName"
                            value={startWeekOn}
                            onChange={e => {
                                setStartWeekOn(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="tw-w-full tw-grid sm:tw-grid-cols-3">
                    <div className="sm:tw-col-start-2 sm:tw-col-span-2 tw-p-2 tw-border-t tw-grid tw-grid-cols-2">
                        <h1 className="tw-mb-2 tw-text-lg tw-font-semibold tw-text-center tw-col-span-3">
                            Disable Dates
                        </h1>
                        <div className="tw-mb-2 sm:tw-col-span-2 tw-mr-2">
                            <label className="tw-block" htmlFor="startDate">
                                Start Date
                            </label>
                            <input
                                className="tw-rounded tw-border tw-px-4 tw-py-2 tw-border-gray-200 sm:tw-w-full tw-w-3/4"
                                id="startDate"
                                value={newDisabledDates.startDate}
                                onChange={e => {
                                    setNewDisabledDates(prev => {
                                        return {
                                            ...prev,
                                            startDate: e.target.value
                                        };
                                    });
                                }}
                            />
                        </div>
                        <div className="tw-mb-2">
                            <label className="tw-block" htmlFor="endDate">
                                End Date
                            </label>
                            <input
                                className="tw-rounded tw-border tw-px-4 tw-py-2 tw-border-gray-200 sm:tw-w-full tw-w-3/4"
                                id="endDate"
                                value={newDisabledDates.endDate}
                                onChange={e => {
                                    setNewDisabledDates(prev => {
                                        return {
                                            ...prev,
                                            endDate: e.target.value
                                        };
                                    });
                                }}
                            />
                        </div>
                        <div className="tw-mb-2 tw-col-span-3">
                            <button
                                onClick={() => {
                                    if (
                                        newDisabledDates.startDate !== "" &&
                                        newDisabledDates.endDate !== ""
                                    ) {
                                        setDisabledDates(prev => [...prev, newDisabledDates]);
                                        setNewDisabledDates({ startDate: "", endDate: "" });
                                    }
                                }}
                                className="tw-w-full tw-bg-black tw-text-white tw-text-lg tw-text-center tw-p-2 tw-rounded-lg"
                            >
                                Add
                            </button>
                        </div>
                        <div className="tw-mb-2 tw-grid tw-col-span-3 tw-grid-col-2">
                            {disabledDates.map((range, index) => (
                                <div className="tw-mb-2 tw-p-2" key={index}>
                                    <button
                                        className="tw-bg-red-500 tw-text-white tw-text-center tw-rounded-xl tw-p-2"
                                        onClick={() => {
                                            setDisabledDates(
                                                disabledDates.filter(r => r !== range)
                                            );
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <span className="tw-pl-2">
                                        {range.startDate} - {range.endDate}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-justify-center tw-w-full">
                <a
                    href="https://github.com/onesine/react-tailwindcss-datepicker"
                    className="tw-block tw-text-gray-700 tw-hover:text-gray-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="tw-w-6 tw-h-6"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
