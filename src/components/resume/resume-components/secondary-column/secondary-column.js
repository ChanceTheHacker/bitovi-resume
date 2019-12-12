import React from "react"

//app imports
import HardSkills from "./hard-skills/hard-skills"
import SoftSkills from "./soft-skills/soft-skills"
import PrimaryLanguages from "./languages/primary-languages"
import SecondaryLanguages from "./languages/secondary-languages"

//mixins
import { flexCenter } from "../../../../style/mixins"

const SecondaryColumn = ({ ratio }) => {
  const mobileStyle = {
    display: `flex`,
    flexDirection: `row`,
    width: `100%`,
    marginRight: `5%`,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
  }

  const webStyle = {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-around`,
    flexGrow: `1`,
  }

  const style = ratio === `mobile` ? mobileStyle : webStyle

  const width = ratio === `mobile` ? `45%` : `100%`

  const eleStyle = { width: width, margin: `2.5%` }
  return (
    <div style={style}>
      <HardSkills style={eleStyle} />
      <SoftSkills style={eleStyle} />
      <PrimaryLanguages style={eleStyle} />
      <SecondaryLanguages style={eleStyle} />
    </div>
  )
}

export default SecondaryColumn
