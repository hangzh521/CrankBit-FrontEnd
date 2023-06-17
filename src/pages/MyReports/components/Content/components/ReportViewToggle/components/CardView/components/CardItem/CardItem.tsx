import { FC } from 'react'
import { FaCircle } from 'react-icons/fa'

interface Props {
  report: string
  lastUpdated: string
  taskNumber: number
}

const CardItem: FC<Props> = ({ report, lastUpdated, taskNumber }) => (
  <div>
    <div key={report} className="border border-border h-36 w-[250px] p-5 rounded">
      <div className="font-bold">{report}</div>
      <div className="flex justify-between text-sm">
        <div>
          <FaCircle className="text-active inline-block mr-3" />
          <span>{`${taskNumber} Tasks`}</span>
        </div>
        <div>8 today</div>
      </div>
      <div className="text-gray text-sm mt-4">{`You ${lastUpdated}`}</div>
    </div>
  </div>
)

export default CardItem
