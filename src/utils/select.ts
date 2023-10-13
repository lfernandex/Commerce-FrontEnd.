export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: "40px",
        border: "none",
        borderRadius:"8px",
        boxShadow: "none",
        "&:hover": {
            border: "none",
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--c-color-font-placeholder)",
    }),
    option: (provided: any) => ({
        ...provided,
        color: "var(--c-color-font-primary)",
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none",
    }),
};