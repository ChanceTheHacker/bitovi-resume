import React from "react"
import style from "./container.module.scss"

const Container = props => {
  return (
    <div style={{ height: `${props.height}px` }} className={style.container}>
      {props.children}
    </div>
  )
}

export default Container
