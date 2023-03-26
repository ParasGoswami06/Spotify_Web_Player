import React from 'react'
import { Container } from 'react-bootstrap'

function Dash_Head() {
  return (
    <Container className='d-flex py-3 justify-content-center align-items-center'>
        <img src={require("./Spotify_Logo_CMYK_Green.webp")} style={{height:"50px",width:"170px"}}>   
        </img>
        <h6 style={{color:"black",paddingTop:"20px"}}>MINI PLAYER</h6>
    </Container>
  )
}

export default Dash_Head