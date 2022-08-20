import React from 'react'

import Layout from 'components/layout'
import * as styles from './SimpleStory.module.scss'

const SimpleStory = ({ pageContext }) => {
  return (
    <Layout>
      <div className={styles.storyContainer}>
        <h2>{pageContext.frontmatter.title}</h2>
        <div className={styles.htmlText} dangerouslySetInnerHTML={{ __html: pageContext.html }} />
      </div>
    </Layout>
  )
}

export default SimpleStory