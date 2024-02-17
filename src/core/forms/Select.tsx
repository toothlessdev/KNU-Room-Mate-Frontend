import styled from "@emotion/styled";

export const Select = styled.select`
    width: 100%;
    height: 45px;

    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 0px 20px;

    &:focus {
        /* border: 2px solid var(--primary); */
        outline: 1px solid var(--primary);
    }
`;
