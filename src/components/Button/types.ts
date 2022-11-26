export interface IButton {
    title: string;
    variant?: string;
    colorText?: string;
    color?: string;
    onClick?: () => void;
    type?: string;
}

export interface IButtonStyled {
    variant: string;
    colorText: string;
}