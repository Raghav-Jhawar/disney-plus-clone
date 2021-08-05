import React from 'react';
import styled from "styled-components";

function Trending() {
    return (
        <Container>
            <h4>Latest & Trending</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8256/1038256-v-59a659b25342" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3029/1033029-v-bd928a1dd530" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5059/1025059-v-0bd382b003ea" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/889261-v" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6" alt="" />
                </Wrap>
                
                 <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3362/1013362-v-fdcfbdad63c9" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183" alt="" />
                </Wrap>
                
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6941/1036941-v-b7f0f9abf579" alt=""/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Trending;

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
    border:none;
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
