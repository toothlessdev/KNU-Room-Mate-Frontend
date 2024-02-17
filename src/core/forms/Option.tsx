import { place_center } from "@/styles/utils";
import styled from "@emotion/styled";

export interface IOption {
    children: React.ReactNode;
}

export const Option: React.FC<IOption> = ({ children }) => {
    return <OptionWrapper>{children}</OptionWrapper>;
};

export const OptionWrapper = styled.div`
    display: inline-block;

    height: 50px;
    border-radius: 15px;

    overflow: hidden;
`;

export const OptionMenu = styled.div`
    display: inline;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    background-color: gray;
`;
