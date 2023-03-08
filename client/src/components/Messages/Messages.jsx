import React, { useEffect, useRef, useState } from 'react'
import Message from './../Message/Message'
import { CSSTransition, TransitionGroup } from 'react-transition-group'  ; 
import './style.css';

const Messages = ({ messages }) => {

  const Ref = useRef(null);
  const [wolcome, setWolcome] = useState('');

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  //   // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  // }
  const scrollToBottom = () => {
    Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  },[messages])

  return (
      <div ref={Ref}  className="messages-end" >
        <TransitionGroup className="messages">
              {messages.map((message, i) => (
                <CSSTransition timeout={500} classNames="item" key={i}>
                  <Message  message={message} />
                </CSSTransition>
              ))}
              <div  />
            </TransitionGroup>
      </div>
  )
}

export default Messages;