import { Button } from '../button';
import * as C from './styles';
type warningModal = {
    message: string
    onClickHandle?: ()=>void
}
export const WarningModal = ({message, onClickHandle}: warningModal)=>{
    return(
        <C.Container>
            <C.Message>
                <p>{message}</p>
                <Button text={'ok'}  onClickHandler={onClickHandle}/>
            </C.Message>
        </C.Container>
    )
}