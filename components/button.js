import React from "react";

// eslint-disable-next-line react/display-name
const Button = React.forwardRef(({children, href, onClick}, ref) => {

  return (
    <a href={href} ref={ref} onClick={onClick} className={'button-styles group'}>
      <span className={'left-side'}/>
      <span className={'top-side delay-250'}/>
      <span className={'right-side delay-500'}/>
      <span className={'bottom-side delay-750'}/>
      {children}
    </a>
    )
})

export default Button;
