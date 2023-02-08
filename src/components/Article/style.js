import styled from "styled-components";

export const  BlogContainerArticle = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--color-footer);
    width: 100%;
    height: 100%;
`;
export const  ArticleImage = styled.div`
    background: var(--color-footer);
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }

`;
export const  ArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    height: 100%;

    p {
        font-size: 12px;
        line-height: 35px;
        font-weight: bold;
        color: #fff;
    }
    h3 {
        font-size: 25px;
        line-height: 30px;
        font-weight: 800;
        color: #fff;
        margin-bottom: 5rem;
        cursor: pointer;
        @media screen and (max-width: 550px){
            font-size: 18px;
            line-height: 25px; 
        }
    }
    p:last-child {
        cursor: pointer;
    }

`;