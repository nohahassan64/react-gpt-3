import styled from "styled-components";

export const FooterSec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: var(--color-footer);
`;
export const FooterHeading = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
    h1 {
        font-size: 62px;
        line-height: 75px;
        font-weight: 800;
        letter-spacing: -0.04em;
        text-align: center;
        @media screen  and (max-width: 850px){
            font-size: 44px;
            line-height: 50px;
        }
        @media screen  and (max-width: 550px){
            font-size: 34px;
            line-height: 42px;
        }
    }
`;
export const FooterBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid #fff;
    text-align: center;
    cursor: pointer;
    margin-bottom: 10rem;
    p {
        font-size: 18px;
        line-height: 21px;
        box-sizing: border-box;
        word-spacing: 2px;
        @media screen  and (max-width: 550px){
            font-size: 14px;
            line-height: 20px;
        }
    }
`;
export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    div {
        width: 250px;
        margin: 1rem;
        @media screen  and (max-width: 550px){
            margin: 1rem 0;
        }
    }
`;
export const FooterLinksLogo = styled.div`
    display: flex;
    flex-direction: column;
    img {
        width: 118px;
        height: 30px;
        margin-bottom: 1rem;
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
`;
export const FooterLinksContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h4 {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 1rem;
    }
    p {
        font-size: 12px;
        line-height: 14px;
        margin: 0.5rem 0;
        cursor: pointer;
    }

`;
export const FooterCopyright = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    p {
        font-size: 12px;
        line-height: 14px;
    }
`;
