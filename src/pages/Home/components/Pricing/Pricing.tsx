import { forwardRef } from 'react'
import DisplayPlans from './components/DisplayPlans/DisplayPlans'

const Pricing = forwardRef<HTMLDivElement>((props, ref) => (
  <div className="mx-auto text-center my-32" ref={ref}>
    <h2 className="text-2xl font-bold mb-6">Pricing</h2>
    <DisplayPlans />
  </div>
))

Pricing.displayName = 'Pricing'

export default Pricing
