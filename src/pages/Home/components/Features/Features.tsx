import { FC } from 'react'
import DisplayCards from './components/DisplayCards/DisplayCards'

const Features: FC = () => (
  <div className="p-8 box-border bg-background-light">
    <h2 className="text-2xl font-bold">Features</h2>
    <div className="flex">
      <DisplayCards />
      <div className="flex flex-col justify-center">
        <img src="./svg/featureImage.svg" alt="featureImage" />
      </div>
    </div>
  </div>
)
export default Features
