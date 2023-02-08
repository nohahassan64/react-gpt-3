import React from 'react'
import Feature from '../Feature'
import { WhatGptSec , WhatGptFeatures , WhatGPTHeading , WhatGPTContainer } from './style'

const WhatGPT3 = () => {
  return (
    <WhatGptSec className='section__margin' id='wgpt3'>
        <WhatGptFeatures>
          <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </WhatGptFeatures>
        <WhatGPTHeading>
            <h1 className='gradient__text'>Let's Build Something Amazing With GPT-3 OpenAi</h1>
            <p>Explore The Library</p>
        </WhatGPTHeading>
        <WhatGPTContainer>
          <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
          <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
          <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </WhatGPTContainer>
    </WhatGptSec>
  )
}

export default WhatGPT3