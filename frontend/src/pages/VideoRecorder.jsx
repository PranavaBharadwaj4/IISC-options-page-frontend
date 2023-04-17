import { useState } from 'react';
import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';

const VideoRecorder = () => {
  const [micOn, setMicOn] = useState(false);

  const handleMicClick = () => {
    setMicOn((prevState) => !prevState);
  };
  const handleStart = () => {
    console.log("start")
  };
  const handleStop = () => {
    console.log("stop")
  };
  const handleReset = () => {
    console.log("reset")
  };

  return (
    <>
    <Navbar />
    <div className="video-recorder">
      <div className="videos-container">
        <div className="video-container">
          <video
            className="video"
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            controls
          ></video>
        </div>
      <div className="divider-vertical"></div>

        <div className="video-container">
          <video
            className="video"
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            controls
          ></video>
        </div>
      </div>
      <div className="divider-horizontal"></div>
      <div className="mic-container">
        <div className="mic-status">
          {micOn ? (
            <>
              <MicIcon className="mic-icon-on" onClick={handleMicClick}/>
              {/* <span className="mic-text">Microphone On</span> */}
            </>
          ) : (
            <>
              <MicOffIcon className="mic-icon-off" onClick={handleMicClick}/>
              {/* <span className="mic-text">Microphone Off</span> */}
            </>
          )}
        </div>
        <div className="button-container">
        <button className="vid-btn" onClick={handleStart}><span>Start</span></button>
        <button className="vid-btn" onClick={handleStop}><span>Stop</span></button>
        <button className="vid-btn" onClick={handleReset}><span>Pause</span></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default VideoRecorder;
