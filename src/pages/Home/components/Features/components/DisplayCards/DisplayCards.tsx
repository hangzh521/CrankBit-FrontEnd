import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import FeatureCard from './components/FeatureCard/FeatureCard'

const cardData = [
  {
    imgSrc: './svg/featureCardIcon1.svg',
    text: 'Easy Builder',
  },
  {
    imgSrc: './svg/featureCardIcon2.svg',
    text: 'Easy Embed',
  },
  {
    imgSrc: './svg/featureCardIcon3.svg',
    text: 'Export Responses',
  },
  {
    imgSrc: './svg/featureCardIcon4.svg',
    text: 'Always on Cloud',
  },
  {
    imgSrc: './svg/featureCardIcon5.svg',
    text: 'Instant Support',
  },
]

const DisplayCards: FC = () => (
  <div className="flex flex-wrap">
    {cardData.map((card) => (
      <FeatureCard key={uuidv4()}>
        <img src={card.imgSrc} className="mb-3" />
        {card.text}
      </FeatureCard>
    ))}
  </div>
)

export default DisplayCards
