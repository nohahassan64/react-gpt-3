import styled from "styled-components";

export const  BlogSec = styled.div`
    display: flex;
    flex-direction: column;

`;
export const  BlogHeading = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 5rem;
    h1 {
        font-size: 62px;
        line-height: 75px;
        font-weight: 800;
        letter-spacing: -0.04em;
        @media screen  and (max-width: 700px){
            font-size: 46px;
            line-height: 52px;
        }
        @media screen  and (max-width: 550px){
            font-size: 34px;
            line-height: 42px;
        }
    }
`;
export const  BlogContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen  and (max-width: 990px){
        flex-direction: column-reverse;   
    }
`;
export const  BlogContainerGroupA = styled.div`
    flex: 0.75;
    margin-right: 2rem;
    @media screen  and (max-width: 990px){
        margin: 2rem 0;
        width: 48% ;
    }
    @media screen  and (max-width: 700px){
        width: 100% ;
    }
    img {
        @media screen  and (max-width: 990px){
            height: 250px;
        }
    }
`;
export const  BlogContainerGroupB = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    grid-gap: 2rem;
    @media screen  and (max-width: 700px){
        grid-template-columns: repeat(1 , 1fr );
    }

`;
