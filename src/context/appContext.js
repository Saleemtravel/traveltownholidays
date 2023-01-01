import { createContext, useContext, useState } from "react";
const data = require("../assets/data.json");
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const packagesData = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const openModalForm = () => {
    setIsModalOpen(true);
  };
  const closeModalForm = () => {
    setIsModalOpen(false);
  };

  const getFooterLinks = () => {
    const links = packagesData.filter((pack) => {
      return pack.footer;
    });
    const footerLinks = links.map((pack, index) => {
      return {
        text: pack.destination,
        path: `/packages/${pack.destination}`,
        id: index + 1,
      };
    });

    return footerLinks;
  };

  const openSubmenu = (text, coordinates) => {
    const international = text === "international" ? true : false;
    const page = {};
    const temp = packagesData.filter((pack, index) => {
      return pack.international === international;
    });
    page.page = text;
    page.links = temp.map((pack, index) => ({
      place: pack.destination,
      path: `/packages/${pack.destination}`,
      id: index + 1,
    }));
    setPage(page);
    setIsSubmenuOpen(true);
    setLocation(coordinates);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const getPackage = ({ packageName }) => {
    return packagesData.find((pack) => pack.destination === packageName);
  };

  const getInternationalPackages = () => {
    return packagesData.filter((pack) => pack.international).splice(0, 5);
  };
  const getDomesticPackages = () => {
    return packagesData.filter((pack) => !pack.international).splice(0, 5);
  };
  const getCarouselList = () => {
    return [
      ...packagesData
        .filter((pack) => pack.international && pack.carousel)
        .splice(0, 4),
      ...packagesData
        .filter((pack) => !pack.international && pack.carousel)
        .splice(0, 4),
    ];
  };
  const getInternationalPackagesAll = () => {
    return packagesData.filter((pack) => pack.international);
  };
  const getDomesticPackagesAll = () => {
    return packagesData.filter((pack) => !pack.international);
  };

  return (
    <AppContext.Provider
      value={{
        openModalForm,
        closeModalForm,
        isModalOpen,
        getFooterLinks,
        openSubmenu,
        setIsSubmenuOpen,
        page,
        location,
        isSubmenuOpen,
        closeSubmenu,
        isSidebarOpen,
        setIsSidebarOpen,
        isModalFormOpen,
        setIsModalFormOpen,
        getPackage,
        getInternationalPackages,
        getDomesticPackages,
        getCarouselList,
        getDomesticPackagesAll,
        getInternationalPackagesAll,
        showContact,
        setShowContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
