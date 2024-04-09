import dayjs from "dayjs";
import React, { useContext } from "react";

import { MONTHS } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { loadLanguageModule } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    currentMonth: number;
    clickMonth: (month: number) => void;
}

const Months: React.FC<Props> = ({ currentMonth, clickMonth }) => {
    const { i18n } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    return (
        <div className="tw-w-full tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2">
            {MONTHS.map(item => (
                <RoundedButton
                    key={item}
                    padding="tw-py-3"
                    onClick={() => {
                        clickMonth(item);
                    }}
                    active={currentMonth === item}
                >
                    <>{dayjs(`2022-${item}-01`).locale(i18n).format("MMM")}</>
                </RoundedButton>
            ))}
        </div>
    );
};

export default Months;
