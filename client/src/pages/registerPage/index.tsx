import * as C from './styls';
import { Input } from '../../components/features/input';
import { Button } from '../../components/features/button';
import { useState } from 'react';
import { api } from '../../api';
import { newUserType } from '../../types/UserTypes';
import { useNavigate } from 'react-router-dom';
import { WarningModal } from '../../components/features/warningModal/indx';
export const RegisterPage = ()=>{
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [post, setPost] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register =async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let newUser:newUserType = {
            name: name,
            age: age,
            post: post,
            email: email,
            password: password,
            confirmPassword:confirmPassword
        };
            await api.createUser(newUser).then((resp)=>console.log(resp))
            navigate('/login')
    }
    return(
        <C.Container>
            {showModal && (
                <WarningModal message='asdsaa' onClickHandle={()=>setShowModal(false)}/>
            )}
            <div>
                <img src={require('../../assets/logo.png')} alt="logo" />
            </div>
            <C.LoginForm onSubmit={register}>
                <h2>Register new user</h2>
                <Input value={name} required placeholder='Name' type='text' onChangeHandler={(e)=>setName(e.target.value)} />
                <Input value={age} required placeholder='Age' type='number' onChangeHandler={(e)=>setAge(e.target.value)} />
                <Input value={post} required placeholder='Post' type='text' onChangeHandler={(e)=>setPost(e.target.value)}/>
                <Input value={email} required placeholder='Email' type='email' onChangeHandler={(e)=>setEmail(e.target.value)} />
                <Input value={password} required placeholder='Password' type='password' onChangeHandler={(e)=>setpassword(e.target.value)}/>
                <Input value={confirmPassword} required placeholder='Confirm password' type='password' onChangeHandler={(e)=>setConfirmPassword(e.target.value)}/>
                <Button text='Register' />
            </C.LoginForm>
        </C.Container>
    )
}