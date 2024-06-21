import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TroubleLoggingIn from "./pages/TroubleLoggingIn";
import DemoSchedule from "./pages/DemoSchedule";
import PricingPlans from "./pages/PricingPlans";
import EdgeStackGrowthPlan from "./pages/EdgeStackGrowthPlan";
import TelepresenceEnterprisePlan from "./pages/TelepresenceEnterprisePlan";
import SolutionBrief from "./pages/SolutionBrief";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/login', element: <LoginPage />},
      {path: '/clientRedirect', element: <TroubleLoggingIn />},
      {path: '/demoSchedule', element: <DemoSchedule />},
      {path: '/pricingPlans/:plan?', element: <PricingPlans /> },
      {path: '/edgeStackGrowth', element: <EdgeStackGrowthPlan />},
      {path: '/telepresenceEnterprisePlan', element: <TelepresenceEnterprisePlan />},
      {path: '/solutionBrief', element: <SolutionBrief />},
    ],
  },
]);

function App() {
  return (
    <>
      
        <RouterProvider router={router} />
     
    </>
  );
}

export default App;