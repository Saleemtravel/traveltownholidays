import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Cancellation,
  Contact,
  Domestic,
  Error,
  Home,
  International,
  Packages,
  Privacy,
  SharedLayout,
} from "./pages";
import { ScrollToTop } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='packages/:packageName' element={<Packages />} />
          <Route path='aboutUs' element={<About />} />
          <Route path='contactUs' element={<Contact />} />
          <Route path='cancelation-policy' element={<Cancellation />} />
          <Route path='privacy-policy' element={<Privacy />} />
          <Route path='domestic-packages' element={<Domestic />} />
          <Route path='international-packages' element={<International />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
