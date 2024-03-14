import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { User } from "./pages/computers/computers";
import { About } from "./pages/phones";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<User />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
