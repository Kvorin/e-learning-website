import React from "react";
import {
  Register,
  Error,
  Login,
  Landing,
  ProtectedRoute,
  Score,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SharedLayout,
  Tests,
  Tutorials,
  ChooseType,
  TOFDisplay,
} from "./pages/dashboard";
import {
  TutorialsDisplay,
  TestDisplay,
  EndScreen,
  TrueOrFalse,
  EndScreenTOF,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Score />} />

          <Route path="tutorials" element={<Tutorials />} />
          <Route path="tutorials/:id" element={<TutorialsDisplay />} />
          <Route path="types" element={<ChooseType />} />
          <Route path="types/tof" element={<TOFDisplay />} />
          <Route path="types/tof/:id" element={<TrueOrFalse />} />
          <Route path="types/tof/:id/results" element={<EndScreenTOF />} />
          <Route path="types/tests" element={<Tests />} />
          <Route path="types/tests/:id" element={<TestDisplay />} />
          <Route path="types/tests/:id/results" element={<EndScreen />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
