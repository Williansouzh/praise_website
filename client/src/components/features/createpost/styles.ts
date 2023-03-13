import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1em;
    background-color: #db6516;
    margin-bottom: 1em;

    select{
        outline: none;
    }
    textarea{
        background-color: whitesmoke;
        width: 100%;
        height: 150px;
        outline: none;
        border: none;
        resize: none;
        padding: .6em;
        font-size: 1em;
    }
    .createpost__downSide{
        display: flex;
        justify-content: space-between;
    }
    .createpost__downSide--button{
        padding: 1em 0em;
    }
    .createpost__downSide--button button{
        padding: .7em;
        width: 100%;
        cursor: pointer;
        background-color: whitesmoke;
        border: 1px solid whitesmoke;
        transition-duration: .3s;
    }
    .createpost__downSide--button button:hover{
        background-color: white;
        border: 1px solid #242526;
    }
`