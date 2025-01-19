import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div></div>
              <div></div>
              {/* Auth */}
            </div>
          }
        />
        <Route
          path="profile"
          element={
            <div>
              <div></div>
              <div></div>
              {/* Profile */}
            </div>
          }
        />
        <Route
          path="home"
          element={
            <div>
              <div></div>
              <div></div>
              {/* Home */}
            </div>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
