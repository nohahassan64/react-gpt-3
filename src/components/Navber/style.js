import styled , { css } from "styled-components";

export const NavbarSec = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    @media screen and (max-width: 700px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 550px) {
        padding: 2rem;
    }
`;
export const NavbarLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const Logo = styled.div`
    margin-right: 2rem;

    img {
        width: 62.56px;
        height: 16.02px;
    }
`;
const NavLink = css`
    font-size: 18px;
    color: #fff;
    line-height: 25px;
    margin: 0 1rem;
    font-weight: 500;
    cursor: pointer;
     a {
        color: #fff;
        text-decoration: none;
    }
`;
const NavSign = css`
    background: #ff4820;
    border-radius: 5px;
    padding: .5rem 1rem;
    border: 0;
    outline: none;
`;
export const NavbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    p {
        ${NavLink}
    }
    @media screen and (max-width: 1050px) {
        display: none;
    }
   
`;
export const NavbarSign = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
        ${NavLink}
    }
    button {
        ${NavLink}
        ${NavSign}  
    }
    @media screen and (max-width: 550px) {
        display: none;
    }
`;
export const NavbarMenu = styled.div`
    display: none;
    svg {
        cursor: pointer;
    }
    @media screen and (max-width: 1050px) {
        display: flex;
    }
`;
export const NavbarMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: end;
    padding: 2rem;
    margin-top: 1rem;
    min-width: 210px;
    position: absolute;
    top: 65px;
    right: 25px;
    border-radius: 5px;
    box-shadow: 0 0 5 rgba(0 , 0 , 0 , .2 ); 
    background: var(--color-footer);
    p {
        padding: .5rem 0;
        ${NavLink}
    }
    @media screen and (max-width: 550px) {
        top: 55px;
    }

`;
export const NavbarMenuLinks = styled.div``;

export const NavbarMenuSign = styled.div`
    button {
        ${NavLink}
        ${NavSign}  
    }
    display: none;
    @media screen and (max-width: 550px) {
        display: block;
    }

`;
