import styled from "styled-components";

export const FeaturesSec = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;

    @media screen and (max-width: 990px) {
        flex-direction: column;
    }

`;
export const FeaturesHeading = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-right:  5rem;
    text-align: left;
    @media screen and (max-width: 990px) {
        margin: 0 0 2rem 0;
    }
    h1 {
        font-size: 34px;
        line-height: 45px;
        font-weight: 800;
        @media screen and (max-width: 550px) {
            font-size: 28px;
            line-height: 38px;
        }
    }
    p {
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        margin-top: 2rem;
        color: #ff8a71;
    }
`;
export const FeaturesContainer = styled.div`
    flex: 1.5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

`;