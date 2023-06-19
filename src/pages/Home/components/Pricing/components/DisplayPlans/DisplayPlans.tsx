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
    <div className="bg-white rounded-xl text-black mr-10">
      <PlanCard icon="./svg/StarterIcon.svg" title="Starter">
        <div className="text-[#007AD3] text-3xl text-left font-bold">FREE</div>
        <ul className="list-none">
          {StarterList.map((item) => (
            <li key={item} className="my-10 text-black text-left">
              <img className="inline mr-9" src="./svg/ListIconStarter.svg" alt="" />
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="text-center text- primary w-60 border py-2.5 rounded-md border-primary bg-white"
        >
          Choose Plan
        </button>
      </PlanCard>
    </div>

    <div className="bg-primary text-white rounded-xl">
      <PlanCard icon="./svg/PremiumIcon.svg" title="Premium">
        <div className="text-white text-3xl text-left font-bold">$4.99/month</div>
        <ul className="list-none">
          {PremiumList.map((item) => (
            <li key={item} className="my-10 text-white text-left">
              <img className="inline mr-9" src="./svg/ListIconPremium.svg" alt="" />
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="text-center text-primary w-60 border py-2.5 rounded-md border-primary bg-white"
        >
          Choose Plan
        </button>
      </PlanCard>
    </div>
  </div>
)
export default DisplayPlans
