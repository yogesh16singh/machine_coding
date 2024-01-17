import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page.tsx';
import New from './New/New.tsx';
import Progress from './Progress/Progress.tsx';
import Counter from './Counter/Counter.tsx';
import Inscroll from './Inscroll/Inscroll.tsx';
import Dark from './Dark/Dark.tsx';
import FileExplore from './FileExplore/FileExplore.tsx';
import Chess from './Chess/Chess.tsx';
import ImageCaraousal from './ImageCaraousal/ImageCaraousal.tsx';
import ResizeThrottle from './ResizeThrottle/ResizeThrottle.tsx';
import Otpui from './Otpui/Otpui.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new",
    element: <New></New>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/progress",
    element: <Progress></Progress>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/counter",
    element: <Counter></Counter>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/infinite",
    element: <Inscroll></Inscroll>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dark",
    element: <Dark></Dark>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fileExplore",
    element: <FileExplore></FileExplore>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chess",
    element: <Chess></Chess>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/imageCaraousal",
    element: <ImageCaraousal></ImageCaraousal>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resizethrottle",
    element: <ResizeThrottle></ResizeThrottle>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/otpui",
    element: <Otpui></Otpui>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
