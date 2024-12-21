import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "RootLayout";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <RootLayout />
    </BrowserRouter>
  );
};

export default App;
