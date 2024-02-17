import styled from "@emotion/styled";

interface IText {
    size: "xs" | "s" | "m" | "l" | "xl";
    weight?: React.CSSProperties["fontWeight"];
}

export const Text = styled.span<IText>`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => {
        if (props.size === "xs") return "14px";
        else if (props.size === "s") return "16px";
        else if (props.size === "m") return "18px";
        else if (props.size === "l") return "20px";
        else if (props.size === "xl") return "24px";
    }};
`;
