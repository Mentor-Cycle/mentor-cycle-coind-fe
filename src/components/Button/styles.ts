import styled, { css } from "styled-components";
import { IButtonStyled } from  './types'

export const ButtonContainer = styled.button<IButtonStyled>`

    background: transparent;
    border-radius: 30px;
    position: relative;
    color: #FFFFFF;
    border: 1px solid #BC1413;
    padding: 2px 12px;
    min-width: 120px;
    width: 187px;
    height: 47px;

    ${({ variant, color, colorText }) => variant !== "primary" && css`
    background: ${color};
    border-radius: 30px;
    position: relative;
    color: ${colorText}};
    border: 1px solid ${color};
    padding: 2px 12px;
    min-width: 120px;
    width: 245px;
    height: 40px;
    `}
`