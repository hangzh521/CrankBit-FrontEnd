import { FC } from 'react'

interface Props {
  report: string
  lastUpdated: string
  taskNumber: number
}

const CardItem: FC<Props> = ({ report, lastUpdated, taskNumber }) => (
  <div>
    <div className="relative p-5 rounded bg-white h-[190px] w-[250px] border border-black shadow-lg">
      <div className="absolute top-0 right-0 w-10 h-10 bg-white border-b border-black transform rotate-45 translate-x-5 translate-y-[-20px]" />
      <div className="absolute top-0 right-0 w-7 h-7 border-b border-l border-black transform" />
      <div className="grid gap-4">
        <div>
          <span className="text-primary text-5xl mr-4">{taskNumber}</span>
          <span>Tasks</span>
        </div>
        <div className="font-bold">{report}</div>
        <div className="text-gray">{lastUpdated}</div>
      </div>
    </div>
  </div>
)

export default CardItem
