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
  const { isSidebarOpen, isModalOpen, setShowContact } = useAppContext();

  const handleBodyClick = (e) => {
    if (!e.target.classList.contains("contact-icon")) {
      setShowContact(false);
    }
  };

  return (
    <div onClick={handleBodyClick}>
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
