import { ThemeType } from "../../styles/Theme";
import styled, { css } from "styled-components";
import { IButtonStyled, VARIANT_BUTTON } from  './types'

const getColorText = (variant: VARIANT_BUTTON, theme: ThemeType) => {
    const colors = {
        [VARIANT_BUTTON.PRIMARY]: theme.colors.white,
        [VARIANT_BUTTON.SECONDARY]: theme.colors.black,
    }
    return colors[variant];
};

const getBackgroundColor = (variant: VARIANT_BUTTON, theme: ThemeType) => {
    const backgroundColor = {
        [VARIANT_BUTTON.PRIMARY]: "transparent",
        [VARIANT_BUTTON.SECONDARY]: theme.colors.primary,
    }
    return backgroundColor[variant];
};

const getBorderColor = (variant: VARIANT_BUTTON, theme: ThemeType) => {
    const borderColor = {
        [VARIANT_BUTTON.PRIMARY]: theme.colors.primary,
        [VARIANT_BUTTON.SECONDARY]: theme.colors.primary,
    }
    return borderColor[variant];
};

export const ButtonContainer = styled.button<IButtonStyled>`

    background-color: ${({ variant, theme}) => getBackgroundColor(variant, theme)};
    border-radius: 30px;
    position: relative;
    color: ${({ variant, theme}) => getColorText(variant, theme)};
    border: 1px solid ${({ variant, theme}) => getBorderColor(variant, theme)};
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    height: 47px;

`