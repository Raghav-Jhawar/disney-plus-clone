import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
// import { setMovies } from '../features/movie/movieSlice';


function Details() {

    const { id } = useParams();
    console.log("the id is", id);

    const [movie, setMovie] = useState();

    useEffect(() => {
        // Grab the movies info from db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists)
            {
                //save the movie data
                setMovie(doc.data());
            } 
        })
    }, [id]);

    return (
        <Container>
            {/* if movies present then */}
            {movie && (
            <>
                <Background>
                    <img src={movie.backgroundImg} alt=""/>
                </Background>

                <TitleImg>
                    <img src={movie.titleImg} alt="" />
                </TitleImg>

                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>PLAY</span>
                    </PlayButton>
                    
                    <TrailarButton>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>TRAILAR</span>
                    </TrailarButton>
                    
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="" />
                    </GroupWatchButton>
                </Controls>

                <SubTitle>
                    {movie.subTitle}
                </SubTitle>

                <Description>
                    {movie.description}
                </Description>
           </>
           
            )}
        </Container>
    )
}

export default Details;

const Container = styled.div`
    min-height:calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Background = styled.div`
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    top:0;
    z-index:-1;
    opacity:0.8;

    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
`

const TitleImg = styled.div`
    height:35vh;
    width:30vw;
    margin-top:30px;

    img {
        height:100%;
        width:100%;
    }
`

const Controls = styled.div`
    display:flex; 
    margin-top:10px;   
    align-items:center;
`

const PlayButton = styled.button`
    background:rgb(249, 249, 249);
    border:none;
    display:flex;
    align-items:Center;
    border-radius:5px;
    letter-spacing:1.8px;
    padding:0 24px;
    margin-right:26px;
    cursor:pointer;
    height:56px;

    &:hover{
        background:rgb(198, 198, 198);
    }
`

const TrailarButton = styled(PlayButton)`
    background:rgba(0, 0, 0,0.3);
    color:rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);

    &:hover{
        background:black;
    }
`

const AddButton = styled.button`
    background:rgba(0, 0, 0, 0.6);
    width:44px;
    height:44px;
    border-radius:50%;
    border:2px solid white;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    margin-right:26px;

    span{
        color:white;
        font-size:20px;
    }
`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`

const SubTitle = styled.div`
    margin-top:26px;
    font-size: 15px;
    min-height:20px;
    color: rgb(249,249,249);
`

const Description = styled.div`
    line-height:1.4;
    font-size:17px;
    margin-top:16px;
    color: rgb(249,249,249);
    max-width:80%;
`
