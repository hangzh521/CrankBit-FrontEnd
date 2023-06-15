import { FC } from 'react'
import PlanCard from './components/PlanCard/PlanCard'

const StarterList = ['5 reports', 'Simple Form Builder', 'Embed Option', 'Sharable Link', 'Email Support']
const PremiumList = [
  'Unlimited Reports',
  'Everything from FREE plan',
  '24x7 Voice Call Support',
  '24x7 Chat Support',
  'Email Support',
]

const DisplayPlans: FC = () => (
  <div className="flex justify-center">
    <PlanCard
      icon="./svg/StarterIcon.svg"
      plan="Starter"
      price="FREE"
      PlanList={StarterList}
      className="bg-white text-black rounded-lg p-11 mr-4 w-80"
      ListIcon="./svg/ListIconStarter.svg"
      PriceText="text-3xl text-[#007AD3]"
    />
    <PlanCard
      icon="./svg/PremiumIcon.svg"
      plan="Premium"
      price="$ 4.99/month"
      PlanList={PremiumList}
      className="bg-[#007AD3] text-white rounded-lg p-11 ml-4 w-80"
      ListIcon="./svg/ListIconPremium.svg"
      PriceText="text-3xl"
    />
  </div>
)
export default DisplayPlans
