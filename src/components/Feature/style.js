import styled from "styled-components";

export const  FeatureContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 1rem;
    flex-direction: row;
    @media screen and (max-width: 550px) {
        margin: 1rem 0;
        flex-direction: column;
    }
`;
export const  FeatureTitle = styled.div`
    flex: 1;
    max-width: 180px;
    margin-right: 2rem;

    div {
        width: 38px;
        height: 3px;
        background: var(--gradient-bar);
        margin-bottom: 0.25rem;
        box-shadow: 0 4px 4px  rgba(0 , 0 , 0 , 0 , 0.25 );

    }
    h1 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 800;
        color: #fff;
        letter-spacing: -0.04em;
        @media screen and (max-width: 550px) {
            font-size: 14px;
            line-height: 22px;
        }
    }
`;
export const  FeatureText = styled.div`
    flex: 2;
    display: flex;
    max-width: 390px;

    p {
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        color: var(--color-text);
        @media screen and (max-width: 550px) {
            font-size: 12px;
            line-height: 20px;
        }
    }

`;