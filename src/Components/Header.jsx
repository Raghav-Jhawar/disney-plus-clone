import React, { useEffect } from 'react';
import "./Header.css";
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";
import { auth, provider} from "../firebase";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useDispatch, useSelector } from "react-redux";
// import styled from 'styled-components';

function Header(){

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
       auth.onAuthStateChanged(async (user) => {
           if(user){
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
            history.push("/"); 
           }
       })
    }, [dispatch, history])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
            history.push("/");
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut(
                history.push("/login")
            ))
        })
    }

    return (
        <div className="header">
            <Link to="/">
                <div className="header_logo">
                    <img src="/images/logo.svg" alt="" />
                </div>
            </Link>

            {/* if else statement in react js */}
            { !userName ? (
                <div className="loginContainer">
                    <button className="loginButton" onClick={signIn}>LogIn</button>
                </div>):
                <>
                    <div className="header_nav">
                        <div className="header_nav_components">
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </div>

                        <div className="header_nav_components">
                            <img src="/images/search-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </div>
                    </div>
                    <Link to="/login">
                        <div className="header_userimage">
                            <img onClick={signOut} src={userPhoto} alt="" />
                        </div>
                    </Link>
                </>
            }
            

        </div>
    )
};

export default Header;
