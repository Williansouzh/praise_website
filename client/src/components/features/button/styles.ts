import styled from "styled-components";
type buttonProps = {
    primary: boolean
}
export const Button = styled.button<buttonProps>`
    background-color: burlywood;
    border: none;
    padding: 1em 2em;
    cursor: pointer;
    border-radius: .3em;
`   