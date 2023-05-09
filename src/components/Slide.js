import React from 'react'
import styled from 'styled-components';

const Slide = (item) => {
    console.log(item)
  return (
    <Container className='project'>
        <div className='card'> 
            <img src={item?.item.linkImg} alt="project" />
            <div className="disc">
                <h1>{item?.item.title}</h1>
                <p>{item?.item.description}</p>
                <button className='btn'>Читать дальше</button>
            </div>
            
        </div>
    </Container>
  )
}

export default Slide;

const Container = styled.div`
    height: 400px;
    border: 1px solid;
    border-radius: 15px;
    background-color: #FFFFFF;
    margin: 1rem 0.5rem;
    display:flex;
    padding: 1rem 0.5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    .card{
        margin: 1rem 0.5rem;
        padding: 1rem 0.5rem;
        display:flex;
    }
    .disc{
        margin-left: 15px;
        display: flex;
        flex-direction:column;
        width: 70%;
    }
    .btn{
        height:20%;
        width:55%;
        background-color: transparent;
        border-radius: 10px;
        padding: 0.5rem;
    }
    img{
        width: 40%;
        height: 40%;
        transition: transform 400ms ease-in-out;
    }
    :hover > img{
        transform: scale(1.1);
    }
    :hover > .btn{
        background-color: rgba(96, 95, 95, 0.12)
    }
    :hover > .disc{
        bottom: 0;
    }

`