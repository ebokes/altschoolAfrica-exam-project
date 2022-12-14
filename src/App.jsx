import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { lazy } from "react";
import { Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ErrorPage from "./pages/Error/ErrorPage";
import ErrorBoundary from "./pages/Error/ErrorBoundary";
import ErrorBoundaryTest from "./pages/Error/ErrorBoundaryTest";
let Home = lazy(() => import("./pages/Home"));
let Search = lazy(() => import("./pages/Search"));
let Contact = lazy(() => import("./pages/Contact"));
let MyProfile = lazy(() => import("./pages/MyProfile"));
let AllRepos = lazy(() => import("./components/AllRepos"));
let Repo = lazy(() => import("./components/Repo"));

function App() {
  const theme = {
    color: {
      primaryText: "#b1b1b1",
      secondaryText: "#B57224",
      tertiaryText: "#e5e5e5",
      linGrad1: "#f5d061",
      linGrad2: "#e48f04",
      bgGradient: "#333333",
      bg: "#000",
      fg: "#1C1C1C",
      bg2: "#141414",
      white: "#fff",
      transparent: "transparent",
    },

    font: {
      font1: `"Exo", sans-serif`,
      font2: ` "Rajdhani", sans-serif`,
      font3: `"Montserrat", sans-serif`,
    },

    screens: {
      xsm: "414px",
      sm: "600px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <GlobalStyles />
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/profile/allrepos" element={<AllRepos />} />
              <Route path="profile/:repoId" element={<Repo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/err-boundary" element={<ErrorBoundaryTest />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
