import { TextField, InputLabel } from '@mui/material'
import { FC } from 'react'

const MessageBox: FC<{ labelName: string }> = ({ labelName }) => (
  <div>
    <div>
      <InputLabel className="flex text-black">{labelName}</InputLabel>
    </div>

    <div>
      <TextField
        id="outlined-multiline-static"
        className="bg-white m-0 min-[512px]:w-[512px] max-[512px]:w-[250px]"
        // border color only defined on 'fieldset' attribute
        sx={{
          fieldset: {
            borderColor: 'black',
          },
        }}
        name={labelName}
        multiline
        required
        rows={4}
      />
    </div>
  </div>
)

export default MessageBox
