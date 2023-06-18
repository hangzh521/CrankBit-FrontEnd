import { FC, useState } from 'react'
import { Box, Button, Container, Link } from '@mui/material'
import TextField from '@mui/material/TextField'
import ReportList from '../../components/ReportList/ReportList'

const ReportS1: FC = () => {
  const [Rego, setRego] = useState('')
  const [VIN, setVIN] = useState('')
  const [Odometer, setOdometer] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')

  return (
    <div color="rgb(235,241,247)">
      <ReportList />
      <Container
        fixed
        sx={{
          backgroundColor: 'rgb(235,241,247)',
          position: 'absolute',
          left: 304,
          height: 832,
          width: 976,
        }}
      >
        <h1
          style={{
            top: 40,
            left: 80,
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 26,
            position: 'absolute',
          }}
        >
          Create New Report
        </h1>

        <Link
          href="/report_s1"
          underline="hover"
          sx={{
            position: 'absolute',
            left: 80,
            top: 80,
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          My Report
        </Link>
        <p
          style={{
            left: 145,
            top: 77,
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
            left: 170,
            top: 79,
          }}
        >
          Create New Report
        </h1>
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            width: 200,
            height: 45,
            left: 720,
            top: 45,
          }}
        >
          Back to My Reports
        </Button>
        <Box
          sx={{
            borderRadius: '10px',
            border: 1,
            borderColor: 'text.secondary',
            position: 'absolute',
            left: 250,
            top: 130,
            width: 460,
            height: 660,
            backgroundColor: 'primary.disabled',
            '&:hover': {
              backgroundColor: 'primary.disabled',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <h1
            style={{
              position: 'absolute',
              left: 50,
              top: 20,
              color: 'black',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
            }}
          >
            TOYOTA CAMRY 2021
          </h1>
          <center>
            <hr
              style={{
                backgroundColor: '#03111B66',
                height: 2,
                width: 380,
                border: 1,
                left: 50,
                top: 70,
                position: 'absolute',
              }}
            />
          </center>
          <h2
            style={{
              position: 'absolute',
              left: 50,
              color: 'black',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
              top: 80,
            }}
          >
            Rego
          </h2>
          <TextField
            label="Rego"
            id="Rego"
            sx={{
              position: 'absolute',
              left: 50,
              top: 130,
              width: 376,
              height: 40,
            }}
            type="text"
            onChange={(e) => setRego(e.target.value)}
            value={Rego}
          />
          {/* <RedBar /> */}
          <h2
            style={{
              position: 'absolute',
              left: 50,
              top: 180,
              color: 'black',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
            }}
          >
            VIN
          </h2>
          <TextField
            label="VIN"
            id="VIN"
            sx={{
              position: 'absolute',
              left: 50,
              width: 376,
              height: 40,
              top: 220,
            }}
            type="text"
            onChange={(e) => setVIN(e.target.value)}
            value={VIN}
          />
          <h2
            style={{
              position: 'absolute',
              top: 270,
              left: 50,
              color: 'black',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
            }}
          >
            Odometer
          </h2>
          <TextField
            label="Odometer"
            id="Odometer"
            sx={{
              position: 'absolute',
              left: 50,
              width: 376,
              height: 40,
              top: 310,
            }}
            type="text"
            onChange={(e) => setOdometer(e.target.value)}
            value={Odometer}
          />
          {/* <RedBar /> */}
          <h1
            style={{
              position: 'absolute',
              left: 50,
              color: 'black',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
              top: 360,
            }}
          >
            Owner
          </h1>
          <center>
            <hr
              style={{
                backgroundColor: '#03111B66',
                height: 2,
                width: 380,
                border: 1,
                position: 'absolute',
                top: 410,
                left: 50,
              }}
            />
          </center>
          <h2
            style={{
              position: 'absolute',
              left: 50,
              color: 'black',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
              top: 410,
            }}
          >
            First Name
          </h2>
          <TextField
            label="First Name"
            id="First Name"
            sx={{
              position: 'absolute',
              left: 50,
              width: 376,
              height: 40,
              top: 450,
            }}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={FirstName}
          />
          <h2
            style={{
              position: 'absolute',
              left: 50,
              color: 'black',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
              textAlign: 'left',
              lineHeight: 3,
              top: 500,
            }}
          >
            Last Name
          </h2>
          <TextField
            label="Last Name"
            id="Last Name"
            sx={{
              position: 'absolute',
              left: 50,
              width: 376,
              height: 40,
              top: 540,
            }}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={LastName}
          />
          <br />
          <br />
          <center>
            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                width: 200,
                height: 40,
                top: 610,
                left: 130,
              }}
              // onClick={handle_My_Report}
            >
              Next
            </Button>
          </center>
        </Box>
      </Container>
    </div>
  )
}
export default ReportS1
