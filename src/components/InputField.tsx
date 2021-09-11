import React from 'react'

const InputField = () => {
  return (
    <div>
      <form className="input">
        <input className="input_box" type="input" placeholder="Enter your task" />
        <button className='input_submit'type="submit">Click</button>
      </form>
    </div>
  )
}

export default InputField;
