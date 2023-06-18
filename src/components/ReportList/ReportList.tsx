import { Divider, List, ListItemButton, ListItemText } from '@mui/material'

import ArticleIcon from '@mui/icons-material/Article'
import { FC, useState } from 'react'

const style = {
  maxWidth: 360,
  bgcolor: '#03111B',
  position: 'absolute',
  width: 304,
  height: 832,
  left: 0,
  top: 0,
}

const ReportList: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number): void => {
    setSelectedIndex(index)
  }
  return (
    <List sx={style} component="nav" aria-label="report_list">
      <ArticleIcon
        sx={{
          position: 'absolute',
          width: '21px',
          height: '27px',
          left: '56px',
          top: '55px',
          color: '#007AD3',
        }}
      />
      <h1
        style={{
          position: 'absolute',
          height: '27px',
          left: '92px',
          top: '55px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '22px',
          lineHeight: '27px',
          /* identical to box height */

          color: ' #FFFFFF',
        }}
      >
        Report Builder
      </h1>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
        sx={{
          position: 'absolute',
          top: 130,
          width: 305,
          height: 40,
        }}
      >
        <ListItemText
          primary="My Reports"
          sx={{
            height: '22px',
            left: 56,
            color: 'white',
            position: 'absolute',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            fontStyle: 'normal',
          }}
        />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
        sx={{
          position: 'absolute',
          top: 180,
          width: 305,
          height: 40,
        }}
      >
        <ListItemText
          primary="Analytics"
          sx={{
            height: '22px',
            left: 56,
            color: 'white',
            position: 'absolute',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            fontStyle: 'normal',
          }}
        />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
        sx={{
          position: 'absolute',
          top: 230,
          width: 305,
          height: 40,
        }}
      >
        <ListItemText
          primary="Knowledge Base"
          sx={{
            height: '22px',
            left: 56,
            color: 'white',
            position: 'absolute',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            fontStyle: 'normal',
          }}
        />
      </ListItemButton>
      <Divider light />
      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
        sx={{
          position: 'absolute',
          top: 280,
          width: 305,
          height: 40,
        }}
      >
        <ListItemText
          primary="Help & Support"
          sx={{
            height: '22px',
            left: 56,
            color: 'white',
            position: 'absolute',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            fontStyle: 'normal',
          }}
        />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
        sx={{
          position: 'absolute',
          top: 380,
          width: 305,
          height: 40,
        }}
      >
        <ListItemText
          primary="My Profile"
          sx={{
            height: '22px',
            left: 56,
            color: 'white',
            position: 'absolute',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            fontStyle: 'normal',
          }}
        />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 5}
        onClick={(event) => handleListItemClick(event, 5)}
        sx={{
          position: 'absolute',
          top: 420,
          width: 305,
          height: 40,
        }}
      >
        <ListItemText
          primary="Log out"
          sx={{
            height: '22px',
            left: 56,
            color: 'white',
            position: 'absolute',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            fontStyle: 'normal',
          }}
        />
      </ListItemButton>
    </List>
  )
}
export default ReportList
