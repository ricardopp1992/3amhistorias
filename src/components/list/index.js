import React from "react"
import { Link } from "gatsby"

import { slugify } from "utils"
import * as styles from "./styles.module.scss"

const List = ({ stories = [] }) => {
  return (
    <div className={styles.listContainer}>
      <ul>
      {
        stories.map(({ frontmatter: { title }, id }) => (
          <Link key={id} className={styles.link} to={`${slugify(title)}`}>
            <li>{title}</li>
          </Link>
        ))
      }
      </ul>
    </div>
  )
}

export default List