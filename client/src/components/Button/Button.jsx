import React from 'react';
import './style.css'

const Button = ({ show, showBtn }) => {
  return (
    <div>
        {!show ? (
        <button
          className="btn-plus"
          onClick={() => showBtn()}
        >
          <i class="fa-solid fa-comments fa-2x"></i>
          {/* <i className="fa fa-plus"></i> */}
        </button>
      ) : (
        <button
          className="btn-moins"
          onClick={() => showBtn(!show)}
        >
          <i class="fa-solid fa-comments fa-2x"></i>
          {/* <i className="fa fa-minus"></i> */}
        </button>
      )}
    </div>
  )
}

export default Button