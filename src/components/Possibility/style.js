import styled from "styled-components";

export const PossibilitySec = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`;
export const PossibilityImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 2rem;
    @media screen and (max-width: 950px) {
        margin: 1rem 0;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
export const PossibilityContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    @media screen and (max-width: 950px) {
        margin-top: 2rem;
    }
    h4 {
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        color: #71e5ff;
    }
    h4:last-child {
        color: #ff8a71;

    }
    h1 {
        font-size: 34px;
        line-height: 45px;
        font-weight: 800;
        margin: 1rem 0;
    }
    p {
        font-size: 16px;
        line-height: 30px;
        color: var(--color-text);
        margin-bottom: 2rem;
    }
`;