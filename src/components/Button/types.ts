import React from "react";

export interface IButton {
    title: string;
    variant: VARIANT_BUTTON;
    onClick?: React.MouseEventHandler;
}

export interface IButtonStyled {
    variant: VARIANT_BUTTON;
}

export enum VARIANT_BUTTON {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}