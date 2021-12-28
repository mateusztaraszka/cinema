import React from "react";

const SubmitButton = ({children}) => {
  return (
    <button type='submit' className={'button-styles group'}>
      <span className={'left-side'}/>
      <span className={'top-side delay-250'}/>
      <span className={'right-side delay-500'}/>
      <span className={'bottom-side delay-750'}/>
      {children}
    </button>
  )
}

export default SubmitButton;
