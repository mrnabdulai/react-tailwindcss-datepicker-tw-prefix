import React from "react";

import { CloseIcon, DateIcon } from "./utils";

interface ToggleButtonProps {
    isEmpty: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = (e: ToggleButtonProps): JSX.Element => {
    return e.isEmpty ? (
        <DateIcon className="tw-h-5 tw-w-5" />
    ) : (
        <CloseIcon className="tw-h-5 tw-w-5" />
    );
};

export default ToggleButton;
