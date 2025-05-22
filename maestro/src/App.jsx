
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'  
import Pickup1 from './pages/Pickup1'
import Pickup2 from './pages/Pickup2'
import Pickup3 from './pages/Pickup3'
import Describe1 from './pages/Describe1'
import Describe2 from './pages/Describe2'
import Describe3 from './pages/Describe3'
import Describe4 from './pages/Describe4'
import Describe5 from './pages/Describe5'
import Describe6 from './pages/Describe6'
import Describe7 from './pages/Describe7'
import Describe8 from './pages/Describe8'
import Location1 from './pages/Location1'
import Location2 from './pages/Location2'
import Location3 from './pages/Location3'
import Location4 from './pages/Location4'
import Payments1 from './pages/Payments1'
import Payments2 from './pages/Payments2'
import Payments3 from './pages/Payments3'
import Payments4 from './pages/Payments4'
import Payments5 from './pages/Payments5'
import Payments6 from './pages/Payments6'
import Payments7 from './pages/Payments7'
import View1 from './pages/View1'
import View2 from './pages/View2'
import View3 from './pages/View3'
import View4 from './pages/View4'
import View5 from './pages/View5'
import Editcard1 from './pages/Editcard1'
import Editcard2 from './pages/Editcard2'
import Editcard3 from './pages/Editcard3'
import Editcard4 from './pages/Editcard4'
import Editcard5 from './pages/Editcard5'
import Editcard6 from './pages/Editcard6'
import Editcard7 from './pages/Editcard7'
import Editcard8 from './pages/Editcard8'
import Editcard9 from './pages/Editcard9'
import Editcard10 from './pages/Editcard10'
import Editcard11 from './pages/Editcard11'
import Editcard12 from './pages/Editcard12'
import Editcard13 from './pages/Editcard13'
import Editcard14 from './pages/Editcard14'
import Notification1 from './pages/Notification1'
import Notification2 from './pages/Notification2'
import Notification3 from './pages/Notification3'
import Notification4 from './pages/Notification4'
import Notification5 from './pages/Notification5'
import Notification6 from './pages/Notification6'
import Notification7 from './pages/Notification7'
import Request1 from './pages/Request1'
import Request2 from './pages/Request2'
import Request3 from './pages/Request3'
import Request4 from './pages/Request4'
import Setting1 from './pages/Setting1'
import Setting2 from './pages/Setting2'
import Setting3 from './pages/Setting3'
import Setting4 from './pages/Setting4'
import Setting5 from './pages/Setting5'
import Setting6 from './pages/Setting6'
import Setting7 from './pages/Setting7'
import Track1 from './pages/Track1'
import Track2 from './pages/Track2'
import Track3 from './pages/Track3'
import Track4 from './pages/Track4'
import Trip1 from './pages/Trip1'
import Trip2 from './pages/Trip2'
import Onboarding1 from './pages/Onboarding1'
import Onboarding2 from './pages/Onboarding2'
import Onboarding3 from './pages/Onboarding3'
import Onboarding4 from './pages/Onboarding4'
import Onboarding5 from './pages/Onboarding5'
import Onboarding6 from './pages/Onboarding6'
import Onboarding7 from './pages/Onboarding7'
import SignUp from './pages/Onboarding8'
import Onboarding9 from './pages/Onboarding9'
import Onboarding10 from './pages/Onboarding10'
import Onboarding11 from './pages/Onboarding11'
import Onboarding12 from './pages/Onboarding12'





function App() {
 
const router = createBrowserRouter([
  { 
    path: '/',
    element: <Onboarding7 />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/sidebar',
    element: <Sidebar />,
  },
  {
    path: '/navbar',
    element: <Navbar />,
  },
  
  {
    path: '/pickup1',
    element: <Pickup1 />,
  },
  {
    path: '/pickup2',
    element: <Pickup2 />,
  },
  {
    path: '/pickup3',
    element: <Pickup3 />,
  },
  {
    path: '/describe1',
    element: <Describe1 />,
  },
  {
    path: '/describe2',
    element: <Describe2 />,
  },
  {
    path: '/describe3',
    element: <Describe3 />,
  },
  {
    path: '/describe4',
    element: <Describe4 />,
  },
  {
    path: '/describe5',
    element: <Describe5 />,
  },
  {
    path: '/describe6',
    element: <Describe6 />,
  },
  {
    path: '/describe7',
    element: <Describe7 />,
  },
  {
    path: '/describe8',
    element: <Describe8 />,
  },
  {
    path: '/location1',
    element: <Location1 />,
  },
  {
    path: '/location2',
    element: <Location2 />,
  },
  {
    path: '/location3',
    element: <Location3 />,
  },
  {
    path: '/location4',
    element: <Location4 />,
  },
  {
    path: '/payments1',
    element: <Payments1 />,
  },
  {
    path: '/payments2',
    element: <Payments2 />,
  },
  {
    path: '/payments3',
    element: <Payments3 />,
  },
  {
    path: '/payments4',
    element: <Payments4 />,
  },
  {
    path: '/payments5',
    element: <Payments5 />,
  },
  {
    path: '/payments6',
    element: <Payments6 />,
  },
  {
    path: '/payments7',
    element: <Payments7 />,
  },
  {
    path: '/view1',
    element: <View1 />,
  },
  {
    path: '/view2',
    element: <View2 />,
  },
  {
    path: '/view3',
    element: <View3 />,
  },
  {
    path: '/view4',
    element: <View4 />,
  },
  {
    path: '/view5',
    element: <View5 />,
  },
  {
    path: '/editcard1',
    element: <Editcard1 />,
  },
  {
    path: '/editcard2',
    element: <Editcard2 />,
  },
  {
    path: '/editcard3',
    element: <Editcard3 />,
  },
  {
    path: '/editcard4',
    element: <Editcard4 />,
  },
  {
    path: '/editcard5',
    element: <Editcard5 />,
  },
  {
    path: '/editcard6',
    element: <Editcard6 />,
  },
  {
    path: '/editcard7',
    element: <Editcard7 />,
  },
  {
    path: '/editcard8',
    element: <Editcard8 />,
  },
  {
    path: '/editcard9',
    element: <Editcard9 />,
  },
  {
    path: '/editcard10',
    element: <Editcard10 />,
  },
  {
    path: '/editcard11',
    element: <Editcard11 />,
  },
  {
    path: '/editcard12',
    element: <Editcard12 />,
  },
  {
    path: '/editcard13',
    element: <Editcard13 />,
  },
  {
    path: '/editcard14',
    element: <Editcard14 />,
  },
  {
    path: '/notification1',
    element: <Notification1 />,
  },
  {
    path: '/notification2',
    element: <Notification2 />,
  },
  {
    path: '/notification3',
    element: <Notification3 />,
  },
  {
    path: '/notification4',
    element: <Notification4 />,
  },
  {
    path: '/notification5',
    element: <Notification5 />,
  },
  {
    path: '/notification6',
    element: <Notification6 />,
  },
  {
    path: '/notification7',
    element: <Notification7 />,
  },
  {
    path: '/request1',
    element: <Request1 />,
  },
  {
    path: '/request2',
    element: <Request2 />,
  },
  {
    path: '/request3',
    element: <Request3 />,
  },
  {
    path: '/request4',
    element: <Request4 />,
  },
  {
    path: '/setting1',
    element: <Setting1 />,
  },
  {
    path: '/setting2',
    element: <Setting2 />,
  },
  {
    path: '/setting3',
    element: <Setting3 />,
  },
  {
    path: '/setting4',
    element: <Setting4 />,
  },
  {
    path: '/setting5',
    element: <Setting5 />,
  },
  {
    path: '/setting6',
    element: <Setting6 />,
  },
  {
    path: '/setting7',
    element: <Setting7 />,
  },
  {
    path: '/track1',
    element: <Track1 />,
  },
  {
    path: '/track2',
    element: <Track2 />,
  },
  {
    path: '/track3',
    element: <Track3 />,
  },
  {
    path: '/track4',
    element: <Track4 />,
  },
  {
    path: '/trip1',
    element: <Trip1 />,
  },
  {
    path: '/trip2',
    element: <Trip2 />,
  },
  {
    path: '/onboarding1',
    element: <Onboarding1 />,
  },
  {
    path: '/onboarding2',
    element: <Onboarding2 />,
  },
  {
    path: '/onboarding3',
    element: <Onboarding3 />,
  },
  {
    path: '/onboarding4',
    element: <Onboarding4 />,
  },
  {
    path: '/onboarding5',
    element: <Onboarding5 />,
  },
  {
    path: '/onboarding6',
    element: <Onboarding6 />,
  },
  {
    path: '/onboarding9',
    element: <Onboarding9 />,
  },
  {
    path: '/onboarding10',
    element: <Onboarding10 />,
  },
  {
    path: '/onboarding11',
    element: <Onboarding11 />,
  },
  {
    path: '/onboarding12',
    element: <Onboarding12 />,
  },
])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
