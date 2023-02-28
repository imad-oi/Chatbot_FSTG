import React from 'react'
import './style.css';

const Message = ({ message}) => {
  // console.log(message.codeHtml)

  const handleClick = ()=>{
    alert('clicked') ; 
  }
  return (
    <>
      {message.isBot ? (
        <div className=" row bot">
          <div className=" col bot_msg">
            <span className="">
              {message.text}
              {/* <code> */}
              <div dangerouslySetInnerHTML={{ __html: message.codeHtml }}></div>
              {/* </code> */}
            </span>
          </div>
          {/* <i className="fas fa-desktop w-6 h-6 dark:text-white  rounded-full order-1" /> */}
        </div>
      ) : (
        <div className="user">
          <div className="col user_msg">
             <span className="">{message.text}</span>
          </div>
          {/* <i className="fas fa-user w-6 h-6 dark:text-white  rounded-full order-1" /> */}
        </div>
      )}
    </>
  )
}

export default Message