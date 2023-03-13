import { Button } from '../../components/features/button';
import { Input } from '../..//components/features/input';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { WarningModal } from '../../components/features/warningModal/indx';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setname } from '../../redux/reducers/userReducer';

export const LoginPage = ()=>{
    //redux
    const dispatch = useDispatch()
    const user = useAppSelector(state=> state.user);

    const navigate = useNavigate()
    const [email, setEmail]= useState('');
    const [passwrod, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false)

   

    const login = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let login: any = await api.login(email, passwrod);
        if(login){
            dispatch(setname(login.user))
            navigate('/homepage')
        }else{
            setShowModal(true)
        }
    }
    return(
        <C.Container>
            {showModal && (
                <WarningModal message='Email or password wrong' onClickHandle={()=>setShowModal(false)}/>
            )}
            <div>
                <img src={require('../../assets/logo.png')} alt="" />
            </div>
            <C.LoginForm onSubmit={login}>
                <Input required placeholder='Email' type='email' value={email}  onChangeHandler={(e)=>setEmail(e.target.value)}/>
                <Input required placeholder='Password' type='password'  value={passwrod} onChangeHandler={(e)=>setPassword(e.target.value)}/>
                <div className='butons'>
                    <Button text='Login' />
                    <Link to='/register'><Button text='Register' /></Link>
                </div>
            </C.LoginForm>
        </C.Container>
    )
}