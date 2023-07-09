import React from 'react'
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className='form'>
      <input className='input' type='text' placeholder='Type a message...'
        value={message}
        onChange={(e)=>{setMessage(e.target.value)}}
        // onKeyUp={(e)=>e.key=='Enter'?{e.preventDefault(); sendMessage(e);}:null}
        onKeyPress={(e) => {
          if(e.key==='Enter'){
            e.preventDefault();
            e.stopPropagation();
            sendMessage(e);
          }
        }}/>
      <button className='sendButton' onClick={(e)=>{e.preventDefault(); sendMessage(e);}}>Send</button>
    </form>
  );
}

export default Input
