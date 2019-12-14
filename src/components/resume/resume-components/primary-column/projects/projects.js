import React from "react"

const style = {
  paddingBottom: `2.5vh`,
}

const Projects = () => {
  return (
    <div style={style}>
      <h3>PROJECTS</h3>
      <div>
        <h2>
          Soft Skills Blog —{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://www.chancethehacker.com"
          >
            Chance The Hacker
          </a>
        </h2>
        <p>
          This is my personal passion project. Built from a gatsby blog starter
          that I have since contributed to via github. I write weekly articles
          that focus on developing soft skills.
        </p>
      </div>
      <div>
        <h2>
          This Resume —{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://github.com/ChanceTheHacker/bitovi-resume"
          >
            Code Here
          </a>
        </h2>
        <p>
          I built this resume from the ground up with gatsby using default
          starter. I used a mix of React, Sass, and inline styling.
        </p>
      </div>
      <div>
        <h2>
          Soggy Brimstone (Award Winning Short Fiction) —{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://docs.google.com/document/d/1Yti8At0gdgYge-NG0q0EIy-J9bkyOpOfWtf6j71-ftk/edit?usp=sharing"
          >
            Soggy Brimstone Manuscript
          </a>
        </h2>
        <p>
          This is a short story I wrote. I entered it in what most consider to
          be the most prestigious writing competetion for fiction Authors
          (Writer's of the Future). I was awarded an Honorable Mention, which is
          a highly sought after accolade.
        </p>
      </div>
      <div>
        <h2>
          Sundown Snog (Game) —{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://sundown-snog.netlify.com"
          >
            Sundown Snog
          </a>
        </h2>
        <p>
          This is one of the first things I ever built. I'm not proud of the UI,
          however the game itself was faily advanced coding. Written in pure JS
          / CSS / HTML. A randomized platforming video game.
        </p>
      </div>
    </div>
  )
}

export default Projects
