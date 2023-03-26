import React from "react";
import { Container } from "react-bootstrap";
// import spotify_logo from "../public/Spotify_Logo_CMYK_Green.webp"

var client_id = "030d620e56e64a09a818c5f19031e29e";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
function Login() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          height:"auto",
          minWidth:"100%",
          paddingTop:"5%"
        }}
      >
        <img
          // src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          src={require("./Spotify_Logo_CMYK_Green.webp")}
          style={{ height: "100px", width: "320px" }}
        ></img>
        <h5 style={{color:"White",paddingTop:"50px"}}>MINI PLAYER</h5>
      </Container>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          minWidth: "100%",
          backgroundColor: "black",
        }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>
      <h6 style={{color:"white",position:"absolute",top:"95%",left:"50%",transform:'translate(-50%,-50%)'}}>Created By Paras Goswami</h6>
    </div>
  );
}

export default Login;
