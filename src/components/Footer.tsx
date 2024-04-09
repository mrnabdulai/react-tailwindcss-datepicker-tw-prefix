import dayjs from "dayjs";
import React, { useCallback, useContext } from "react";
import { DATE_FORMAT } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { PrimaryButton, SecondaryButton } from "./utils";

const Footer: React.FC = () => {
    // Contexts
    const { hideDatepicker, period, changeDatepickerValue, configs, classNames } =
        useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        if (typeof classNames !== "undefined" && typeof classNames?.footer === "function") {
            return classNames.footer();
        }
        return "tw-flex tw-items-center tw-justify-end tw-pb-2.5 tw-pt-3 tw-border-t tw-border-gray-300 dark:tw-border-gray-700";
    }, [classNames]);

    return (
        <div className={getClassName()}>
            <div className="tw-w-full md:tw-w-auto tw-flex tw-items-center tw-justify-center tw-space-x-3">
                <SecondaryButton
                    onClick={() => {
                        hideDatepicker();
                    }}
                >
                    <>{configs?.footer?.cancel ? configs.footer.cancel : "Cancel"}</>
                </SecondaryButton>
                <PrimaryButton
                    onClick={() => {
                        if (period.start && period.end) {
                            changeDatepickerValue({
                                startDate: dayjs(period.start).format(DATE_FORMAT),
                                endDate: dayjs(period.end).format(DATE_FORMAT)
                            });
                            hideDatepicker();
                        }
                    }}
                    disabled={!(period.start && period.end)}
                >
                    <>{configs?.footer?.apply ? configs.footer.apply : "Apply"}</>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Footer;
