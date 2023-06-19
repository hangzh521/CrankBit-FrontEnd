import { FC } from 'react'

import FeatureCard from './components/FeatureCard/FeatureCard'

const DisplayCards: FC = () => (
  <div className="flex flex-wrap">
    <FeatureCard content="Easy Builder">
      <img src="./svg/featureCardIcon1.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Easy Embed">
      <img src="./svg/featureCardIcon2.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Export Responses">
      <img src="./svg/featureCardIcon3.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Always on Cloud">
      <img src="./svg/featureCardIcon4.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Instant Support">
      <img src="./svg/featureCardIcon5.svg" alt="" />
    </FeatureCard>
  </div>
)
export default DisplayCards
