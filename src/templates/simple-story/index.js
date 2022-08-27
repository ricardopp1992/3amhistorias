import React, { useEffect } from 'react'

import Layout from 'components/layout'
import Seo from 'components/seo'
import { addIdToTags } from 'utils'
import * as styles from './SimpleStory.module.scss'

const SimpleStory = ({ pageContext }) => {
  const parsedStoryHtml = addIdToTags(pageContext.html)

  const handleBookmark = (event) => {
    window.location.replace(`#${event.currentTarget.id}`)
  }

  useEffect(() => {
    const pElements = document.querySelectorAll('.story p')
    pElements.forEach(pElement =>
      pElement.addEventListener('click', handleBookmark)
    )
  }, [])

  return (
    <Layout>
      <div className={styles.storyContainer}>
        <h2>{pageContext.frontmatter.title}</h2>
        <div className={`${styles.htmlText} story`} dangerouslySetInnerHTML={{ __html: parsedStoryHtml }} />
      </div>
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  return (
    <Seo title={`${pageContext.frontmatter.title} | 3am`} />
  )
}

export default SimpleStory