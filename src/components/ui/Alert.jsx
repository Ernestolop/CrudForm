import React from 'react'

const Alert = ({ display, type, message }) => {
    return (
        <div className={`${display ? 'block' : 'hidden'} text-center mb-4 p-2 rounded-md ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            <p>{message}</p>
        </div>
    )
}

export default Alert;