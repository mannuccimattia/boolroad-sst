import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import TripDetail from "./pages/TripDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/viaggi/:id" element={<TripDetail />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
