import { css } from "@emotion/css";
import styled from "@emotion/styled";

export interface IButton {
    width: string;
    variant: "filled" | "stroke";
}

export const Button = styled.button<IButton>`
    width: ${(props) => props.width};
    height: 45px;

    display: block;

    margin: 5px 0px;

    border-radius: 15px;
    border: ${(props) => {
        if (props.variant === "filled") return "0";
        else if (props.variant === "stroke") return "1px solid #d73a32";
    }};

    background-color: ${(props) => {
        if (props.variant === "filled") return "#d73a32";
        else if (props.variant === "stroke") return "#fff";
    }};

    color: ${(props) => {
        if (props.variant === "filled") return "#fff";
        else if (props.variant === "stroke") return "#d73a32";
    }};

    &:hover {
        cursor: pointer;
    }
`;
