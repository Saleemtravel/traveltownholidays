import { Outlet } from "react-router-dom";
import {
  Branding,
  Footer,
  ModalFormButton,
  Navbar,
  Sidebar,
  Submenu,
  ModalForm,
} from "../components";
import { useAppContext } from "../context/appContext";
const SharedLayout = ({ children }) => {
  const { isSidebarOpen, isModalOpen } = useAppContext();

  return (
    <div>
      <header>
        <Navbar />
        <Submenu />
      </header>
      {isSidebarOpen && (
        <Sidebar scale={isSidebarOpen ? `scale(1)` : `scale(0)`} />
      )}
      {children}
      <Outlet />
      <Footer />
      <Branding />
      {isModalOpen && <ModalForm />}
      <ModalFormButton />
    </div>
  );
};
export default SharedLayout;
