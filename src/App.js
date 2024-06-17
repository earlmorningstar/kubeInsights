import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/login", element: <LoginPage />},
      // {path: "/about", element: <AboutPage />},
      // { path: "/products", element: <ProductsPage /> },
      // { path: "/products/:productId", element: <ProductsDetailPage /> },
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