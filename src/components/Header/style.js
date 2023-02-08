import styled from "styled-components";

export const HeaderSec = styled.div`
    display: flex;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
    }
`;
export const HeaderContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 5rem;
    h1 {
        font-weight: 800;
        font-size: 62px;
        line-height: 75px;
        letter-spacing: -0.04em;
        @media screen and (max-width: 650px) {
            font-size: 48px;
            line-height: 60px;
        }
        @media screen and (max-width: 490px) {
            font-size: 36px;
            line-height: 48px;
        }
    }
    p {
        font-size: 20px;
        line-height: 27px;
        margin-top: 1.5rem;
        color: var(--color-text);
        @media screen and (max-width: 650px) {
            font-size: 16px;
            line-height: 24px;
        }
        @media screen and (max-width: 490px) {
            font-size: 14px;
            line-height: 24px;
        }
    }
    @media screen and (max-width: 1050px) {
        margin: 0 0 3rem;
    }
`;
export const HeaderContentInput = styled.div`
    display: flex;
    width: 100%;
    margin: 2rem 0 1rem;
    input {
        font-size: 20px;
        line-height: 27px;
        flex: 2;
        width: 100%;
        min-height: 50px;
        background-color: var(--color-footer);
        color: #fff;
        border: 2px solid var(--color-footer);
        outline: none;
        padding: 0 1rem;
        border-radius: 5px 0 0 5px;
        @media screen and (max-width: 650px) {
            font-size: 16px;
            line-height: 24px;
        }
        @media screen and (max-width: 490px) {
            font-size: 12px;
            line-height: 16px;
        }
    }
    button {
        font-size: 20px;
        line-height: 27px;
        font-weight: bold;
        flex: .7;
        width: 100%;
        min-height: 50px;
        background-color: #ff4820;
        color: #fff;
        padding: 0 1rem;
        border-radius: 0 5px 5px 0;
        outline: none;
        cursor: pointer;
        border: none;
        @media screen and (max-width: 650px) {
            font-size: 16px;
            line-height: 24px;
        }
        @media screen and (max-width: 490px) {
            font-size: 12px;
            line-height: 16px;
        }
    }
`;
export const HeaderContentPeople = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
    
    img {
        width: 181.79px;
        height: 38px;
    }
    p {
        font-size: 12px;
        line-height: 38px;
        font-weight: 500;
        text-align: center;
        color: #fff;
        margin: 0 0 0 1rem;
        @media screen and (max-width: 650px) {
            margin: 0;
        }
    }
    @media screen and (max-width: 650px) {
        flex-direction: column;
    }

`;
export const HeaderImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
     img {
        width: 100%;
        height: 100%;
     }

`;