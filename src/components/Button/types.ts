export interface IButton {
    title: string;
    variant: VARIANT_BUTTON;
    onClick?: () => void;
}

export interface IButtonStyled {
    variant: VARIANT_BUTTON;
}

export enum VARIANT_BUTTON {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}