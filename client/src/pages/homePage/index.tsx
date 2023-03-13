import * as C from './styles';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setname } from '../../redux/reducers/userReducer';
import { api } from '../../api';
import { Header } from '../../components/header';
import { MainRoutes } from '../../routes/mainRoutes';
import { Outlet } from 'react-router-dom';
import { Dashboard } from '../../components/features/dashboard';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
export const HomePage = ()=>{
    const user = useAppSelector(state=> state.user);
    const [showLogOutModal, setShowlogOutModal] = useState<boolean>(false)

    useEffect(()=>{
        if(user.user.email.length>0){
            console.log(user.user.email.length>0)
            setShowlogOutModal(false)
        }else{
            setShowlogOutModal(true)
        }
    },[])
    return(
        <C.Container>
            {showLogOutModal && 
                <div><h1>time spired</h1></div>
            }
            {!showLogOutModal &&
                <>
                    
                    <Header/>
                    <Dashboard/>
                    <Footer/>
                </>
            }
        </C.Container>
    )
};

