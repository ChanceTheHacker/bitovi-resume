import React from "react"
import scss from "./resume.module.scss"

import Title from "./resume-components/title/title"
import PrimaryColumn from "./resume-components/primary-column/primary-column"
import SecondaryColumn from "./resume-components/secondary-column/secondary-column"

const Resume = ({ ratio }) => {
  const mobileStyle = {}

  const webStyle = {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `strech`,
  }

  const style = ratio === `mobile` ? mobileStyle : webStyle

  return (
    <div className={scss.resumeSpacing}>
      <div className={scss.resume}>
        <Title />
        <div style={style}>
          <PrimaryColumn ratio={ratio} />
          <SecondaryColumn ratio={ratio} />
        </div>
      </div>
    </div>
  )
}

export default Resume
