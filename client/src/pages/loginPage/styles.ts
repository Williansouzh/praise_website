import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 350px;
    .butons{
        display: flex;
        justify-content: space-around;
    }
`