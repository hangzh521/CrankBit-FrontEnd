import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import GetStarted from '@/pages/GetStarted'
import Login from '@/pages/Login'
import Report from '@/pages/Report'
import MyReports from '@/pages/MyReports'
import KnowledgeBase from '@/pages/KnowledgeBase'
import HelpSupport from '@/pages/HelpSupport'
import PrivateRoute from '@/routes/PrivateRoute'
import MyAccount from '@/pages/MyAccount'
import ReportS1 from '@/pages/Report_s1'
import MyProfile from '@/pages/MyProfile'
import CreateAccount from '@/pages/CreateAccount'
import MyReportsHistory from '@/pages/MyReportsHistory'
import CreateReport from '@/pages/CreateReport'

const isLoggedIn = true

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/auth/get-started',
    element: <GetStarted />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/report',
    element: <Report />,
  },
  {
    path: '/user/my-reports',
    element: <MyReports />,
  },
  {
    path: '/user/my-reports/create-report',
    element: <CreateReport />,
  },
  {
    path: '/user/knowledge-base',
    element: <KnowledgeBase />,
  },
  {
    path: '/user/help-support',
    element: <HelpSupport />,
  },
  {
    path: '/account',
    element: (
      <PrivateRoute isLoggedIn={isLoggedIn}>
        <MyAccount />
      </PrivateRoute>
    ),
  },
  {
    path: '/user/my-profile',
    element: <MyProfile />,
  },
  {
    path: '/auth/signup/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/user/my-reports/history',
    element: <MyReportsHistory />,
  },
  {
    path: '/report-s1',
    element: <ReportS1 />,
  },
])

const App: FC = () => <RouterProvider router={router} />

export default App
