import { ColorKeys, Colors } from "../types";

export const COLORS = [
    "blue",
    "orange",
    "yellow",
    "red",
    "purple",
    "amber",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose"
] as const;

export const DEFAULT_COLOR: ColorKeys = "blue";

export const LANGUAGE = "en";

export const DATE_FORMAT = "YYYY-MM-DD";

export const START_WEEK = "sun";

export const DATE_LOOKING_OPTIONS = ["forward", "backward", "middle"];

export const DAYS = [0, 1, 2, 3, 4, 5, 6];

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const CALENDAR_SIZE = 42;

// Beware, these maps of colors cannot be replaced with functions using string interpolation such as `bg-${color}-100`
// as described in Tailwind documentation https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export const BG_COLOR: Colors = {
    100: {
        blue: "tw-bg-blue-100",
        orange: "tw-bg-orange-100",
        yellow: "tw-bg-yellow-100",
        red: "tw-bg-red-100",
        purple: "tw-bg-purple-100",
        amber: "tw-bg-amber-100",
        lime: "tw-bg-lime-100",
        green: "tw-bg-green-100",
        emerald: "tw-bg-emerald-100",
        teal: "tw-bg-teal-100",
        cyan: "tw-bg-cyan-100",
        sky: "tw-bg-sky-100",
        indigo: "tw-bg-indigo-100",
        violet: "tw-bg-violet-100",
        fuchsia: "tw-bg-fuchsia-100",
        pink: "tw-bg-pink-100",
        rose: "tw-bg-rose-100"
    },
    200: {
        blue: "tw-bg-blue-200",
        orange: "tw-bg-orange-200",
        yellow: "tw-bg-yellow-200",
        red: "tw-bg-red-200",
        purple: "tw-bg-purple-200",
        amber: "tw-bg-amber-200",
        lime: "tw-bg-lime-200",
        green: "tw-bg-green-200",
        emerald: "tw-bg-emerald-200",
        teal: "tw-bg-teal-200",
        cyan: "tw-bg-cyan-200",
        sky: "tw-bg-sky-200",
        indigo: "tw-bg-indigo-200",
        violet: "tw-bg-violet-200",
        fuchsia: "tw-bg-fuchsia-200",
        pink: "tw-bg-pink-200",
        rose: "tw-bg-rose-200"
    },
    500: {
        blue: "tw-bg-blue-500",
        orange: "tw-bg-orange-500",
        yellow: "tw-bg-yellow-500",
        red: "tw-bg-red-500",
        purple: "tw-bg-purple-500",
        amber: "tw-bg-amber-500",
        lime: "tw-bg-lime-500",
        green: "tw-bg-green-500",
        emerald: "tw-bg-emerald-500",
        teal: "tw-bg-teal-500",
        cyan: "tw-bg-cyan-500",
        sky: "tw-bg-sky-500",
        indigo: "tw-bg-indigo-500",
        violet: "tw-bg-violet-500",
        fuchsia: "tw-bg-fuchsia-500",
        pink: "tw-bg-pink-500",
        rose: "tw-bg-rose-500"
    },
    hover: {
        blue: "hover:tw-bg-blue-600",
        orange: "hover:tw-bg-orange-600",
        yellow: "hover:tw-bg-yellow-600",
        red: "hover:tw-bg-red-600",
        purple: "hover:tw-bg-purple-600",
        amber: "hover:tw-bg-amber-600",
        lime: "hover:tw-bg-lime-600",
        green: "hover:tw-bg-green-600",
        emerald: "hover:tw-bg-emerald-600",
        teal: "hover:tw-bg-teal-600",
        cyan: "hover:tw-bg-cyan-600",
        sky: "hover:tw-bg-sky-600",
        indigo: "hover:tw-bg-indigo-600",
        violet: "hover:tw-bg-violet-600",
        fuchsia: "hover:tw-bg-fuchsia-600",
        pink: "hover:tw-bg-pink-600",
        rose: "hover:tw-bg-rose-600"
    }
};

export const TEXT_COLOR: Colors = {
    500: {
        blue: "tw-text-blue-500",
        orange: "tw-text-orange-500",
        yellow: "tw-text-yellow-500",
        red: "tw-text-red-500",
        purple: "tw-text-purple-500",
        amber: "tw-text-amber-500",
        lime: "tw-text-lime-500",
        green: "tw-text-green-500",
        emerald: "tw-text-emerald-500",
        teal: "tw-text-teal-500",
        cyan: "tw-text-cyan-500",
        sky: "tw-text-sky-500",
        indigo: "tw-text-indigo-500",
        violet: "tw-text-violet-500",
        fuchsia: "tw-text-fuchsia-500",
        pink: "tw-text-pink-500",
        rose: "tw-text-rose-500"
    },
    600: {
        blue: "tw-text-blue-600 dark:tw-text-blue-400 dark:hover:tw-text-blue-400",
        orange: "tw-text-orange-600 dark:tw-text-orange-400 dark:hover:tw-text-orange-400",
        yellow: "tw-text-yellow-600 dark:tw-text-yellow-400 dark:hover:tw-text-yellow-400",
        red: "tw-text-red-600 dark:tw-text-red-400 dark:hover:tw-text-red-400",
        purple: "tw-text-purple-600 dark:tw-text-purple-400 dark:hover:tw-text-purple-400",
        amber: "tw-text-amber-600 dark:tw-text-amber-400 dark:hover:tw-text-amber-400",
        lime: "tw-text-lime-600 dark:tw-text-lime-400 dark:hover:tw-text-lime-400",
        green: "tw-text-green-600 dark:tw-text-green-400 dark:hover:tw-text-green-400",
        emerald: "tw-text-emerald-600 dark:tw-text-emerald-400 dark:hover:tw-text-emerald-400",
        teal: "tw-text-teal-600 dark:tw-text-teal-400 dark:hover:tw-text-teal-400",
        cyan: "tw-text-cyan-600 dark:tw-text-cyan-400 dark:hover:tw-text-cyan-400",
        sky: "tw-text-sky-600 dark:tw-text-sky-400 dark:hover:tw-text-sky-400",
        indigo: "tw-text-indigo-600 dark:tw-text-indigo-400 dark:hover:tw-text-indigo-400",
        violet: "tw-text-violet-600 dark:tw-text-violet-400 dark:hover:tw-text-violet-400",
        fuchsia: "tw-text-fuchsia-600 dark:tw-text-fuchsia-400 dark:hover:tw-text-fuchsia-400",
        pink: "tw-text-pink-600 dark:tw-text-pink-400 dark:hover:tw-text-pink-400",
        rose: "tw-text-rose-600 dark:tw-text-rose-400 dark:hover:tw-text-rose-400"
    },
    hover: {
        blue: "hover:tw-text-blue-700",
        orange: "hover:tw-text-orange-700",
        yellow: "hover:tw-text-yellow-700",
        red: "hover:tw-text-red-700",
        purple: "hover:tw-text-purple-700",
        amber: "hover:tw-text-amber-700",
        lime: "hover:tw-text-lime-700",
        green: "hover:tw-text-green-700",
        emerald: "hover:tw-text-emerald-700",
        teal: "hover:tw-text-teal-700",
        cyan: "hover:tw-text-cyan-700",
        sky: "hover:tw-text-sky-700",
        indigo: "hover:tw-text-indigo-700",
        violet: "hover:tw-text-violet-700",
        fuchsia: "hover:tw-text-fuchsia-700",
        pink: "hover:tw-text-pink-700",
        rose: "hover:tw-text-rose-700"
    }
};

export const BORDER_COLOR: Colors = {
    500: {
        blue: "tw-border-blue-500",
        orange: "tw-border-orange-500",
        yellow: "tw-border-yellow-500",
        red: "tw-border-red-500",
        purple: "tw-border-purple-500",
        amber: "tw-border-amber-500",
        lime: "tw-border-lime-500",
        green: "tw-border-green-500",
        emerald: "tw-border-emerald-500",
        teal: "tw-border-teal-500",
        cyan: "tw-border-cyan-500",
        sky: "tw-border-sky-500",
        indigo: "tw-border-indigo-500",
        violet: "tw-border-violet-500",
        fuchsia: "tw-border-fuchsia-500",
        pink: "tw-border-pink-500",
        rose: "tw-border-rose-500"
    },
    focus: {
        blue: "focus:border-blue-500",
        orange: "focus:tw-border-orange-500",
        yellow: "focus:tw-border-yellow-500",
        red: "focus:tw-border-red-500",
        purple: "focus:tw-border-purple-500",
        amber: "focus:tw-border-amber-500",
        lime: "focus:tw-border-lime-500",
        green: "focus:tw-border-green-500",
        emerald: "focus:tw-border-emerald-500",
        teal: "focus:tw-border-teal-500",
        cyan: "focus:tw-border-cyan-500",
        sky: "focus:tw-border-sky-500",
        indigo: "focus:tw-border-indigo-500",
        violet: "focus:tw-border-violet-500",
        fuchsia: "focus:tw-border-fuchsia-500",
        pink: "focus:tw-border-pink-500",
        rose: "focus:tw-border-rose-500"
    }
};

export const RING_COLOR: Colors = {
    focus: {
        blue: "focus:tw-ring-blue-500",
        orange: "focus:tw-ring-orange-500",
        yellow: "focus:tw-ring-yellow-500",
        red: "focus:tw-ring-red-500",
        purple: "focus:tw-ring-purple-500",
        amber: "focus:tw-ring-amber-500",
        lime: "focus:tw-ring-lime-500",
        green: "focus:tw-ring-green-500",
        emerald: "focus:tw-ring-emerald-500",
        teal: "focus:tw-ring-teal-500",
        cyan: "focus:tw-ring-cyan-500",
        sky: "focus:tw-ring-sky-500",
        indigo: "focus:tw-ring-indigo-500",
        violet: "focus:tw-ring-violet-500",
        fuchsia: "focus:tw-ring-fuchsia-500",
        pink: "focus:tw-ring-pink-500",
        rose: "focus:tw-ring-rose-500"
    },
    "second-focus": {
        blue: "focus:tw-ring-blue-500/20",
        orange: "focus:tw-ring-orange-500/20",
        yellow: "focus:tw-ring-yellow-500/20",
        red: "focus:tw-ring-red-500/20",
        purple: "focus:tw-ring-purple-500/20",
        amber: "focus:tw-ring-amber-500/20",
        lime: "focus:tw-ring-lime-500/20",
        green: "focus:tw-ring-green-500/20",
        emerald: "focus:tw-ring-emerald-500/20",
        teal: "focus:tw-ring-teal-500/20",
        cyan: "focus:tw-ring-cyan-500/20",
        sky: "focus:tw-ring-sky-500/20",
        indigo: "focus:tw-ring-indigo-500/20",
        violet: "focus:tw-ring-violet-500/20",
        fuchsia: "focus:tw-ring-fuchsia-500/20",
        pink: "focus:tw-ring-pink-500/20",
        rose: "focus:tw-ring-rose-500/20"
    }
};

export const BUTTON_COLOR: Colors = {
    focus: {
        blue: "focus:tw-ring-blue-500/50 focus:tw-bg-blue-100/50",
        orange: "focus:tw-ring-orange-500/50 focus:tw-bg-orange-100/50",
        yellow: "focus:tw-ring-yellow-500/50 focus:tw-bg-yellow-100/50",
        red: "focus:tw-ring-red-500/50 focus:bg-red-100/50",
        purple: "focus:tw-ring-purple-500/50 focus:tw-bg-purple-100/50",
        amber: "focus:tw-ring-amber-500/50 focus:tw-bg-amber-100/50",
        lime: "focus:tw-ring-lime-500/50 focus:tw-bg-lime-100/50",
        green: "focus:tw-ring-green-500/50 focus:tw-bg-green-100/50",
        emerald: "focus:tw-ring-emerald-500/50 focus:tw-bg-emerald-100/50",
        teal: "focus:tw-ring-teal-500/50 focus:tw-bg-teal-100/50",
        cyan: "focus:tw-ring-cyan-500/50 focus:tw-bg-cyan-100/50",
        sky: "focus:tw-ring-sky-500/50 focus:tw-bg-sky-100/50",
        indigo: "focus:tw-ring-indigo-500/50 focus:tw-bg-indigo-100/50",
        violet: "focus:tw-ring-violet-500/50 focus:tw-bg-violet-100/50",
        fuchsia: "focus:tw-ring-fuchsia-500/50 focus:tw-bg-fuchsia-100/50",
        pink: "focus:tw-ring-pink-500/50 focus:tw-bg-pink-100/50",
        rose: "focus:tw-ring-rose-500/50 focus:tw-bg-rose-100/50"
    }
};
