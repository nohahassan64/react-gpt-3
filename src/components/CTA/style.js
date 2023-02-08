import styled from "styled-components";

export const  CTASec   = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin: 4rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    background: var(--gradient-bar);
    color: #fff;
    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
    @media screen and (max-width: 550px) {
        margin: 4rem 2rem;
    }
`;
export const  CTAContent   = styled.div`
    p {
        font-size: 12px;
        line-height: 30px;
        font-weight: 500;
        color: #0e0e0e;
    }
    h3 {
        font-size: 24px;
        line-height: 45px;
        font-weight: 800;
        color: #000;
        @media screen and (max-width: 550px) {
            font-size: 18px;
            line-height: 32px;
        }
    }

`;
export const  CTAButton  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    @media screen and (max-width: 650px) {
        margin: 2rem 0 0;
    }
    button {
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
        color: #fff;
        background: #000;
        border-radius: 40px;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        max-width: 150px;
        @media screen and (max-width: 550px) {
            font-size: 14px;
            line-height: 28px;
        }
    }


`;