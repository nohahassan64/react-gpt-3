import React from 'react'
import Article from '../Article'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import {BlogSec,BlogHeading,BlogContainer,BlogContainerGroupA,BlogContainerGroupB} from './style'

const Blog = () => {
  return (
    <BlogSec className='section__padding' id='blog'>
        <BlogHeading>
            <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it.</h1>
        </BlogHeading>
        <BlogContainer>
            <BlogContainerGroupA>
                <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </BlogContainerGroupA>
            <BlogContainerGroupB>
                <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </BlogContainerGroupB>
        </BlogContainer>

    </BlogSec>
  )
}

export default Blog