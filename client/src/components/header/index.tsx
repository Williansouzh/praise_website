import * as C from './styled';
import { Link } from 'react-router-dom';
import {  TfiComments, TfiCommentsSmiley} from "react-icons/tfi";
import { RiStarSmileLine } from "react-icons/ri";
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setname } from '../../redux/reducers/userReducer';
import { RiLogoutCircleRFill } from "react-icons/ri";
//
export const Header = ()=>{
    const dispatch = useDispatch()


    

    const togleClass = (e:any)=>{
        let navElement = e.target.parentNode;
        let navs:any = document.querySelectorAll('.header__nav')
        for(let i = 0; i<navs.length;i++){
            console.log(navs[i])
            navs[i].classlist.remove('selected')
        }
        navElement.classList.toggle("selected")
    }

    let user = useAppSelector(state=>state.user);
    return(
        <C.Header>
            <C.Nav>
                <div className='header__userLogged'>
                    <h1>
                    {user.user.name}</h1>
                    <div className='header__userLogged--info'>
                        <h4>{user.user.post}</h4>
                        <h4>{`Age: ${user.user.age}`}</h4>
                    </div>
                </div>
                <div className='header__comentsNav'>
                    <Link className='header__nav'  to={'/homepage/compliments'}>
                        <TfiComments  onClick={togleClass} className='headerNavIcon'/>
                    </Link>
                    <Link className='header__nav'  to={'/homepage/mycompliments'}>
                        <TfiCommentsSmiley onClick={togleClass}  className='headerNavIcon'/>
                    </Link>
                    <Link className='header__nav' to={'/homepage/topcompliments'}>
                        <RiStarSmileLine onClick={togleClass}  className='headerNavIcon' />
                    </Link>
                </div>
                <div className='header__logout'>
                    <Link to={'/login'}>
                            <RiLogoutCircleRFill className='headerNavIcon' onClick={()=>{
                            dispatch(setname({}))
                        }}/>
                    </Link>
                </div>
            </C.Nav>
        </C.Header>
    )
}