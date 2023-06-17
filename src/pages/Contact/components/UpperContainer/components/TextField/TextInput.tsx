import { TextField, InputLabel } from '@mui/material'
import { FC } from 'react'

const TextInput: FC<{ labelName: string; type: string }> = ({ labelName, type }) => (
  <div>
    <div>
      <InputLabel className="flex text-black">{labelName}</InputLabel>
    </div>

    <div>
      <TextField
        margin="dense"
        id="outlined-required"
        className="bg-white m-0 w-[250px]"
        size="small"
        required
        // border color only defined on 'fieldset' attribute
        sx={{
          fieldset: {
            borderColor: 'black',
          },
        }}
        name={labelName}
        type={type}
      />
    </div>
  </div>
)

export default TextInput
