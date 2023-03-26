import React from "react"

const styles={
  mainDiv:{
    cursor:"pointer",
    border:"1.5px solid rgba(200,200,200,0.3)",
    background:"radial-gradient(circle, rgba(242,242,242,1) 0%, rgba(145,145,145,0.03974089635854339) 100%)"
  },
  imgPadding:{
    paddingLeft:"10px"
  },
}


export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={styles.mainDiv}
      onClick={handlePlay}
      id="trackDiv"
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3" style={styles.imgPadding}>
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}