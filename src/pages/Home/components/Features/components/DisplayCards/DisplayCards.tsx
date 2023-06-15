import { FC } from 'react'
import FeatureCard from './components/FeatureCard/FeatureCard'

const DisplayCards: FC = () => (
  <div className="flex flex-wrap">
    <FeatureCard icon="./svg/featureCardIcon1.svg" content="Builder" description="Easy Builder" />
    <FeatureCard icon="./svg/featureCardIcon2.svg" content="Embed" description="Easy Embed" />
    <FeatureCard icon="./svg/featureCardIcon3.svg" content="Responses" description="Export Responses" />
    <FeatureCard icon="./svg/featureCardIcon4.svg" content="Cloud" description="Always on Cloud" />
    <FeatureCard icon="./svg/featureCardIcon5.svg" content="Support" description="Instant Support" />
  </div>
)
export default DisplayCards
