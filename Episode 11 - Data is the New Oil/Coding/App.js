import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import { RestaurantShimmer } from "./src/components/Shimmer";
import UserContext from "./src/context/UserContext";
import "./index.css";

/**
 * Chunking
 * Lazy Loading
 * Code Splitting
 * Dynamic Imports
 * Dynamic Bundding
 * Prefetching
 * Suspense
 * On-Demand Loading
 */

const About = lazy(() => import("./src/components/About"));
const Body = lazy(() => import("./src/components/Body"));

const App = () => {
  const [userName, setUserName] = useState();

  // Authentication Logic
  useEffect(() => {
    // Make an API Call and send username and password
    const data = {
      name: "Bharat",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="w-full flex flex-col justify-between items-center mt-[120px] min-h-[calc(100vh-120px)]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

// Children Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RestaurantShimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={<h1 className="text-3xl font-bold">Loading...</h1>}
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hello",
    element: <h1 className="text-3xl font-bold">Hello, World!!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
