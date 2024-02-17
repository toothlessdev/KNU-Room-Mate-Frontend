import styled from "@emotion/styled";

export interface ILabel {
    size: "s" | "m" | "l";
}

export const Label = styled.p<ILabel>`
    display: block;
    margin: 15px 0px 10px 0px;

    font-weight: bold;
    font-size: ${(props) => {
        if (props.size === "s") return "16px";
        else if (props.size === "m") return "18px";
        else if (props.size === "l") return "20px";
    }};
`;
