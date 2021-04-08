import React from 'react';
import './App.css';
import './styles.css';
import imageInSrc from './ImageInSrc.jpg'
import video from './myVideo.mp4'

function App() {
  return (
    <div className="App">
      <div className="first">
        <h1 className="title red">Kays Meayan</h1>
        <br/>
        <img src={imageInSrc} alt="image_src" />
        <br/>
        <img src="./imageInPublic.jpg" alt="image_public" />
      </div>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
      </video>  
    </div>
  );
}

export default App;