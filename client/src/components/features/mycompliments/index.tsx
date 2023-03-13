import { useEffect, useState } from 'react'
import { api } from '../../../api'
import { postType } from '../../../types/postTypes'
import { PostType } from '../../../types/UserTypes'
import { useAppSelector } from '../../../redux/hooks/useAppSelector'
import * as C from './styles'
import { CreatePost } from '../createpost'
import { Post } from '../post/indext'

export const MyCompliments = ()=>{
    const userLogged = useAppSelector(state=>state.user.user.name)
    const [myCpmpliments, setMyCompliments] = useState<postType[]>([])

    const updateMyCompliments = async()=>{
        let response = await api.listPosts();
        let list:postType[] = []
        for(let i in response){
            list.push(response[i])
        }
        setMyCompliments(list.filter(e=>e.userto == userLogged))
    }

    const likeFunction = async (e:any)=>{
        let postElement = e.target.parentNode;
        if(postElement.classList.contains('liked')){
            await api.likePost(postElement.id, true)
            e.target.parentNode.classList.toggle("liked");
        }else{
            await api.likePost(postElement.id)
            e.target.parentNode.classList.toggle("liked");
        }
        updateMyCompliments()
    }
    useEffect(()=>{
        updateMyCompliments()
    }, [])
    return(
        <C.Container>
            {myCpmpliments.map((e, index)=>(
                <Post key={index} id={e.id} message={e.postcontent} from={e.userfrom} likes={e.likes} to={e.userto} onClickHandle={likeFunction}/>
            ))}
        </C.Container>
    )
}