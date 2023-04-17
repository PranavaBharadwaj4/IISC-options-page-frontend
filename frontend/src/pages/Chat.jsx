import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ChatContainer from '../components/ChatContainer';

function Chat() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle file submission logic
  };
  const currentChat = {

      username: "username",
  }
  

  return (
    <>
    <Navbar />
    <div className="chat-main-container">

    <div className="FileUploadAndChat">
      <div className="FileUploadAndChat__upload">
        <div className="brand">

        <h2>File Upload</h2>
        </div>
        <form id='fileUpload' onSubmit={handleSubmit}>
          <div className="FileUploadAndChat__upload__description">
            <label  htmlFor="file-input">Choose A File To Upload
            <input className="custom-file-input" id="file-input" type="file" onChange={handleFileChange}/> 
            {file && <p>Selected file: {fileName}</p>}
            </label>
          </div>
        </form>
          <button form='fileUpload' type="submit"  className="upl-btn"><span>Upload</span> </button>
      </div>
      <div className="FileUploadAndChat__chat-container">
        <ChatContainer 
        currentChat={currentChat}
        />
      </div>
    </div>
    </div>
    </>
  );
}
export default Chat;