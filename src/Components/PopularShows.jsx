import React from 'react';
import styled from "styled-components";

function PopularShows() {
    return (
        <Container>
            <h4>Popular Shows</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/907/840907-v" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/1039261-v-a1af4132f87a" alt="" />
                </Wrap>
                
                 <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/830896-v" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6941/1036941-v-b7f0f9abf579" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default PopularShows;

const Container = styled.div`
 h4{
    font-size:20px;
    cursor:pointer;
    
    &:hover{
        color:#1f80e0;
    }
 }
`

const Content = styled.div`
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    grid-gap:20px;
    padding-bottom:20px;
`

const Wrap = styled.div`
    overflow:hidden;
    cursor:pointer;
    padding:0;
    border:3px solid none;
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;

    img{
        height:100%;
        width:100%;
        object-fit:cover;
        border-radius:6px;
    }
    
    &:hover{
        transform:scale(1.2);
        border-color:rgba(249,249,249,0.8);
    }

`
