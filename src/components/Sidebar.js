import SocialLinks from "./SocialLinks";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Sidebar = () => {
  const { setIsSidebarOpen } = useAppContext();
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const handleSidebarClosure = (e) => {
    if (e.target.classList.contains("sidebar-Wrapper")) {
      closeSideBar();
    }
  };
  return (
    <Wrapper onClick={handleSidebarClosure} className={"sidebar-Wrapper"}>
      <nav>
        <div className='asideNavTitle'>
          <NavLink to='/' onClick={closeSideBar}>
            <Logo className={"logo"} />
          </NavLink>
          <button className={"btn btn-close"} onClick={closeSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active " : "link";
              }}
              to='/'
              onClick={closeSideBar}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active " : "link";
              }}
              to='domestic-packages'
              onClick={closeSideBar}
            >
              domestic
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active " : "link";
              }}
              to='international-packages'
              onClick={closeSideBar}
            >
              international
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active " : "link";
              }}
              to='aboutUs'
              onClick={closeSideBar}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active " : "link";
              }}
              to='ContactUs'
              onClick={closeSideBar}
            >
              contact us
            </NavLink>
          </li>
        </ul>
        <div>
          <SocialLinks className={"social-icons"} />
          <p>© Copyright {new Date().getFullYear()} Travel Town Holidays</p>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  transition: var(--transition);
  transform: ${(props) => props.scale || `scale(1)`};

  nav {
    width: 90vw;
    height: 90vh;
    display: grid;
    place-content: center;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    background: var(--primary-200);
    color: var(--grey-800);
    padding: 1rem 2rem;
    grid-template-columns: 21fr;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    overflow-y: scroll;
  }

  nav:hover {
    box-shadow: var(--shadow-4);
  }
  .asideNavTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .social-icons a {
    font-size: 1.5rem;
    color: var(--primary-300);
    display: inline-block;
    cursor: pointer;
    background: var(--primary-700);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem;
    border-radius: 50%;
    transition: var(--transition);
    margin-top: 0.25rem;
  }

  .social-icons a:hover {
    color: var(--primary-700);
    background: var(--primary-300);
  }
  .social-icons {
    display: flex;
    justify-content: space-evenly;
    max-width: 15rem;
    margin: 1rem auto;
  }
  ul {
    margin: 3rem auto;
  }

  p {
    text-align: center;
  }
  @media screen and (min-width: 560px) {
    display: none;
  }
`;
export default Sidebar;
