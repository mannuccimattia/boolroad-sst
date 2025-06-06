import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
