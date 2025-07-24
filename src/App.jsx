import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Button } from "./components/ui/button"
import AppLayouts from "./layouts/app-layouts"
import Landing from "./pages/Landing"
import Onboarding from "./pages/Onboarding"
import JobListing from "./pages/JobListing"
import PostJobs from "./pages/PostJobs"
import MyJobs from "./pages/MyJobs"
import SavedJobs from "./pages/SavedJobs"
import JobPage from "./pages/JobPage"
import { ThemeProvider } from "./components/ui/theme-provider"



const router = createBrowserRouter([
  {
    element: <AppLayouts />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/joblisting',
        element: <JobListing />
      },
      {
        path: '/postjobs',
        element: <PostJobs />
      },
      {
        path: '/myjobs',
        element: <MyJobs />
      },
      {
        path: '/savedjobs',
        element: <SavedJobs />
      },
    ]
  }
])

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router = {router}/>
    </ThemeProvider>
  )
}

export default App
