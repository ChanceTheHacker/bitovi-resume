import React from "react"
import { useSpring, animated } from "react-spring"
import useMeasure from "../hooks/useMeasure"

import style from "./index.module.scss"
import Layout from "../components/layout/layout"
// import SEO from "../components/seo/seo"
import Container from "../components/container/container"
import Resume from "../components/resume/resume"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const moveBackground = (x, y) =>
  `scale(1.11) translate3d(${x / 10}px,${y / 10}px,0)`

const moveForeground = (x, y) =>
  `scale(1.2) translate3d(${x / 6 + 10}px,${y / 6 +
    10}px,0) rotateY(180deg) rotateX(180deg)`

const moveResume = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`

const IndexPage = () => {
  const [anim, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const [bind, { height, width, x }] = useMeasure()

  const space = x * 4

  const ratio = height / width > 2.5 ? `mobile` : `web`

  return (
    <Layout>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        {/* BACKGROUND 1 */}
        <Container height={height + space}>
          <animated.div
            className={style.background}
            style={{
              transform: anim.xy.interpolate(moveBackground),
              height: `${height + space}px`,
            }}
          ></animated.div>
        </Container>

        {/* BACKGROUND 2 */}
        <Container height={height + space}>
          <animated.div
            className={style.foreground}
            style={{
              transform: anim.xy.interpolate(moveForeground),
              height: `${height + space}px`,
            }}
          ></animated.div>
        </Container>

        {/* RESUME */}

        <Container>
          <div {...bind} className={style.resumeContainer}>
            <animated.div
              style={{ transform: anim.xy.interpolate(moveResume) }}
            >
              <Resume ratio={ratio} />
            </animated.div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
