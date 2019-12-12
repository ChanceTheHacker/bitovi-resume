import React from "react"

import Overview from "./overview/overview"
import Experience from "./experience/experience"
import Projects from "./projects/projects"

const PrimaryColumn = ({ ratio }) => {
  const mobileStyle = { width: `100%`, marginRight: `5%`, flexGrow: `3` }

  const webStyle = {
    width: `60%`,
    marginRight: `5%`,
    flexGrow: `3`,
  }

  const style = ratio === `mobile` ? mobileStyle : webStyle
  return (
    <div style={style}>
      <Overview />
      <Experience />
      <Projects />
    </div>
  )
}

export default PrimaryColumn
