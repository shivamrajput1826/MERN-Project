import { GlobalDataProvider } from "./store";
import { Generic } from "./components/base/basic/generics";
import { ErrorBoundary } from "./components/error/errorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import Header from "./components/atomic/Header";
import './index.css'

export const App = () => {
  return (
    <GlobalDataProvider>
      <Generic />
      <ErrorBoundary>
        <Router>
        <Header/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </GlobalDataProvider>
  );
};
