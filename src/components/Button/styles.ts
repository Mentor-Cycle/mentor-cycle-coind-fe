import styled, { css } from "styled-components";
import { IButtonStyled } from  './types'

export const ButtonContainer = styled.button<IButtonStyled>`

${({ variant }) => variant === "primary" && css`
    background: transparent;
    border-radius: 30px;
    position: relative;
    color: #FFFFFF;
    border: 1px solid #BC1413;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
 `}

    ${({ variant }) => variant === "secondary" && css`
    background: #485059;
    border-radius: 30px;
    position: relative;
    color: #292D32;
    border: 1px solid #485059;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    `}

    ${({ variant }) => variant === "tertiary" && css`
    background: #BC1413;
    border-radius: 30px;
    position: relative;
    color: #292D32;
    border: 1px solid #BC1413;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    `}
`