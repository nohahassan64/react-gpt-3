import React from 'react'
import { BlogContainerArticle , ArticleImage , ArticleContent } from './style'

const Article = ({ imgUrl , date , title }) => {
  return (
    <BlogContainerArticle>
        <ArticleImage>
            <img src={imgUrl} alt='blog image' />
        </ArticleImage>
        <ArticleContent>
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </ArticleContent>

    </BlogContainerArticle>
  )
}

export default Article