import React from 'react'

function Button(props) {
  return (
    <button
    disabled={props.disabled}
                className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md shadow px-8 py-3 border text-base font-medium ${props.className}`}
                onClick={props.onClick}
                > 
                {props.children}
</button> 
  )
}

export default Button