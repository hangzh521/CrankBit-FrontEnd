import { FC, useState } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'
import { Link } from '@mui/material'

const Report: FC = () => {
  const [, setImage] = useState<File | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0])
    }
  }

  return (
    <div className="Reprt_1 bg-blue-100">
      <div className="flex flex-col items-center mt-3">
        <h1 className="text-2xl font-bold absolute top-30 left-0">Create New Report</h1>
        <Link
          href="/report_1"
          underline="hover"
          sx={{
            position: 'absolute',
            left: 0,
            top: 50,
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          My Report
        </Link>
        <p
          style={{
            left: 60,
            top: 48,
            position: 'absolute',
            color: 'rgba(3, 17, 27, 0.4)',
          }}
        >
          &gt;&gt;
        </p>
        <h1
          style={{
            position: 'absolute',
            fontSize: 12,
            left: 80,
            top: 50,
          }}
        >
          Create New Report
        </h1>

        <div className="flex justify-end w-full">
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to My Reports
          </button>
        </div>

        <div className="container border border-black mt-10 bg-white">
          <div className="p-4">
            <div className="p-4">
              <h2 className="text-lg font-bold ">Snapshot</h2>
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
                  <div className="w-16 h-16 border border-black flex items-center justify-center bg-white text-center">
                    <label htmlFor="upload-image">
                      <HiOutlineCamera className="w-6 h-6 text-black cursor-pointer" />
                    </label>
                    <input
                      id="upload-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <p className="mt-2 text-gray-600">Upload Image</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="border border-black p-2">
                <textarea className="w-full h-20 p-2 bg-white" placeholder="Comments..." />
              </div>
            </div>
            <div className="p-4">
              <div className="text-center">
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
