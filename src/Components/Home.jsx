import React, { useEffect } from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from "../firebase";
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((docs) => {
                return{
                    id:docs.id,
                    ...docs.data()
                }
            })

            dispatch(setMovies(tempMovies));
        })
    }, [dispatch])

    return (
        <div className="home">
            <ImageSlider />
            <Viewers />
            <Movies/>
        </div>
    )
}

export default Home;
