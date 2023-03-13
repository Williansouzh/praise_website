import * as C from './styles';
import { PostType } from '../../../types/UserTypes';
import { AiFillLike } from "react-icons/ai";
import { stringify } from 'querystring';
export const Post = ({message, from, likes, to, onClickHandle, id}:PostType)=>{
    return(
        <C.Container>
            <div className='post__user'>
                <p>{`${from} Commended to ${to}`}</p> 
            </div>
            <div className='post__comment'>
                <p>{message}</p>
            </div>
            <div className='post__likes' id={id?.toString()}>
                <AiFillLike className='icon' id={id?.toString()} onClick={onClickHandle}/> {likes}
            </div>
        </C.Container>
    )
}