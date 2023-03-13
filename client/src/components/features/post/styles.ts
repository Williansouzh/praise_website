import styled from "styled-components";

export const Container = styled.div`
color: white;
    margin-bottom: 1em;
    padding: 1em;
    background-color: #18191a;;
    .post__comment{
        margin: 1em 0em;
    }
    .post__likes{
        display: flex;
        align-items: center;
    }
    .icon{
        font-size: 2em;
        cursor: pointer;
        margin-right: .5em;
        z-index: 99;
    }
    .icon:hover{
        color: red;

    }
    .liked{
        color: #DB6516;
    }
`