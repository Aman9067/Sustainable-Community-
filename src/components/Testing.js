import React from 'react'

const Testing = () => {
  return (
    <div>

<div style="position: relative; width: 100%; max-width: 800px; margin: auto;">
 
  <video
    src="https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4"
    autoplay
    muted
    loop
    style="width: 100%;"
  ></video>

 
  <div
    style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      font-size: 3rem;
      font-family: Arial, sans-serif;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
      color:white;
    "
  >
    <p>Creative Text Goes Here</p>
    <p style="font-size: 1.5rem; ">Inspire, Innovate, Create</p>
  </div>
</div>

    </div>
  )
}

export default Testing