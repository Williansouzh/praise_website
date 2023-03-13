import axios from 'axios';
import { postType } from './types/postTypes';
import { newUserType, PostType, userlogin } from './types/UserTypes';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
});
export const api =  {
    createUser: async(newUser:newUserType)=>{
        axiosInstance.post('/register', {
            name: newUser.name,
            age: newUser.age,
            post: newUser.post,
            email: newUser.email,
            password: newUser.password,
            confirmPassword: newUser.confirmPassword
        })
    },
    login: async(email:string, password:string)=>{
        let login = await axiosInstance.post('/login', {
            email: email,
            password: password
        }).then(user=>{
            localStorage.setItem('token', user.data.token);
            if(user.data.status){
                return user.data
            }else{
                return false
            }
        }).catch((err)=>{
            console.log(err)
            return false
        })
        return login

    },
    list: async()=>{
        const token = localStorage.getItem('token');
        let response = await axiosInstance.get('/list', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.list
    },
    //posts
    listPosts: async()=>{
        let response = await axiosInstance.get('/posts');
        return response.data.posts
    },
    createPost: async(newPost: PostType)=>{
        console.log(newPost)
        await axiosInstance.post('./posts', {
            userfrom: newPost.from,
            userto: newPost.to,
            likes: newPost.likes,
            postcontent: newPost.message
        })
    },
    likePost: async (id: number, liked?: boolean)=>{
        if(liked){
            await axiosInstance.put(`/posts/${id}`,{
                id,
                liked
            })
        }else{
            await axiosInstance.put(`/posts/${id}`,{
                id
            })
        }
    }
}