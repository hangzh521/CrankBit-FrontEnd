import { FC, useState } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'
import Button from '@/components/Button'

const Form: FC = () => {
  const [, setImage] = useState<File | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0])
    }
  }

  return (
    <div className="bg-white border border-gray px-12 py-10 rounded-2xl shadow">
      <div className="p-4">
        <h2 className="text-lg font-bold">Snapshot</h2>
        <div className="border-t border-black mx-auto w-full" />
        <div className="text-center mt-4">
          <div className="flex flex-col items-center mb-4">
            <p className="font-semibold">Services:</p>
            <select className="p-2 border border-gray-300 w-full rounded">
              <option value="a">Tyre Pressure</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 border border-black flex items-center justify-center bg-white text-center">
              <label htmlFor="upload-image">
                <HiOutlineCamera className="w-10 h-10 text-black cursor-pointer" />
              </label>
              <input id="upload-image" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </div>
            <p className="mt-2 text-gray-600">Upload Image</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Button className="w-[200px] bg-primary">Submit</Button>
      </div>
    </div>
  )
}

export default Form
