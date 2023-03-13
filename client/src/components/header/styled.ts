import styled from "styled-components";

export const Header = styled.header`
    background-color: #242526;
    padding: 1em;
    .headerNavIcon{
        color: white;
        font-size: 2em;
        margin: 0em .5em;
    }
    .headerNavIcon:hover{
        color: blue;
    }
    .header__comentsNav{
    }
`;
export const Nav = styled.nav`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .header__userLogged--info{
        display: flex;
    }
    .header__userLogged--info h4{
        margin-right: 1em;
    }
    .selected{
        color: red;
    }
`