import React from "react"

import { flexCenter } from "../../../../style/mixins"

const style = {
  ...flexCenter,
  width: "100%",
  paddingBottom: "5vh",
}

const Title = () => {
  return (
    <div style={style}>
      <h1 style={{ ...flexCenter, width: "100%" }}>William Peragine</h1>
      <h4 style={{ ...flexCenter, width: "100%" }}>
        Web Developer & Ethical Hacker
      </h4>
    </div>
  )
}

export default Title
