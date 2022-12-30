import { useAppContext } from "../context/appContext";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
    closeSubmenu,
  } = useAppContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  const handleSubmenu = () => {
    closeSubmenu();
    // setTimeout(closeSubmenu, 1000);
  };

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
      onMouseLeave={handleSubmenu}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { path, place } = link;
            return (
              <NavLink
                key={index}
                to={path}
                className='link'
                onClick={handleSubmenu}
              >
                {place}
              </NavLink>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
export default Submenu;
