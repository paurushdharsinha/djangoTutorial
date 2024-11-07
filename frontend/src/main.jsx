import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HeroSection, Signup, Login, JobRecommendation, SkillAssessment } from './components/index'
import { Provider } from 'react-redux'
import store from './store/store'
import Dashboard from './components/dashboard/Dashboard'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<HeroSection />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup /> } />
      <Route path='/job' element={<JobRecommendation /> } />
      <Route path='/skill-assessment' element={<SkillAssessment /> } />
      <Route path='/dashboard' element={<Dashboard /> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
