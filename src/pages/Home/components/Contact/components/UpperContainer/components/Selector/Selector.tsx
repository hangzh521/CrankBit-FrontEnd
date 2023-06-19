import { TextField, InputLabel, MenuItem } from '@mui/material'
import { FC } from 'react'

const Selector: FC<{ labelName: string }> = ({ labelName }) => {
  const enquiryType = [
    {
      value: 'Sales',
      label: 'Sales',
    },
  ]

  return (
    <div>
      <div>
        <InputLabel className="flex text-black">{labelName}</InputLabel>
      </div>

      <div>
        <TextField
          id="enquiryType"
          select
          defaultValue="Sales"
          className="bg-white m-0 min-[512px]:w-[512px] max-[512px]:w-[250px]"
          size="small"
          // border color only defined on 'fieldset' attribute
          sx={{
            fieldset: {
              borderColor: 'black',
            },
          }}
          name={labelName}
        >
          {enquiryType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  )
}

export default Selector
