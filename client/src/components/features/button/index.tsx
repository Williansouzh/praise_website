import * as C from './styles';
type buttonType={
    text: string
    onClickHandler?: ()=>void
    primary?: boolean
}
export const Button = ({text, onClickHandler, primary=false}: buttonType)=>{
    return(
        <C.Button primary={primary} onClick={onClickHandler}>
            {text}
        </C.Button>
    )
}