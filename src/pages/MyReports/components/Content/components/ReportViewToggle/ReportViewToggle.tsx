import { FC, useState } from 'react'
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai'
import ListView from './components/ListView'
import CardView from './components/CardView'
import ToggleButton from '@/components/ToggleButton'

const ReportViewToggle: FC = () => {
  const [viewMode, SetViewMode] = useState<'list' | 'card'>('list')

  return (
    <div className="bg-white rounded-lg mt-4">
      <div className="flex items-center my-4 p-4 justify-between ">
        {viewMode === 'list' ? (
          <div className="flex gap-20">
            <div className="min-w-[140px]">Reports</div>
            <div className="min-w-[175px]">Last Updated</div>
            <div className="min-w-[140px]">task</div>
          </div>
        ) : (
          <div />
        )}

        <div className="w-1/6 cursor-pointer text-end text-3xl">
          <ToggleButton icon={AiOutlineAppstore} isActive={viewMode === 'card'} onClick={() => SetViewMode('card')} />
          <ToggleButton icon={AiOutlineMenu} isActive={viewMode === 'list'} onClick={() => SetViewMode('list')} />
        </div>
      </div>
      <div className="overflow-y-scroll max-h-screen p-4">{viewMode === 'list' ? <ListView /> : <CardView />}</div>
    </div>
  )
}

export default ReportViewToggle
