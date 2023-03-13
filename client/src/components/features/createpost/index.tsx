import { useState, useEffect } from 'react';
import { api } from '../../../api';
import { UserType } from '../../../types/UserTypes';
import { PostType } from '../../../types/UserTypes';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import * as C from './styles';

export const CreatePost = ()=>{
    let userLogged = useAppSelector(state=>state.user.user)

    const [users, setUsers] = useState<UserType[]>([])
    const [newPost, setNewPost] = useState<PostType>()
    const updateUsers = async ()=>{
        let users: UserType[] = await api.list()
        setUsers(users)
    }
    const createPost = async()=>{
        if(newPost?.to){
            let newpostClone = Object.assign({}, newPost);
            newpostClone.likes = 0
            newpostClone.from = userLogged.name
            api.createPost(newpostClone)
        }else{
            console.log(newPost?.to)
            alert('for who')
        }
    }
    useEffect(()=>{
        updateUsers()
    },[]);
    return(
        <C.Container>
            <textarea name="createPost" id="createpost" defaultValue='' value={newPost?.message} onChange={(e)=>{
                let newpostClone = Object.assign({}, newPost);
                newpostClone.message = e.target.value;
                setNewPost(newpostClone)
            }}>

            </textarea>
            <div className='createpost__downSide'>
                <div>
                    {`To `} 
                    <select name="from" id="from"  onChange={(e)=>{
                        let newpostClone = Object.assign({}, newPost)
                        newpostClone.to = e.target.value
                        setNewPost(newpostClone)
                        console.log(newPost)
                    }}>
                        {users.map((user, index)=>(
                            <option key={index}>{user.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div className='createpost__downSide--button'>
                    <button onClick={createPost}>Post</button>
            </div>
        </C.Container>
    )
}