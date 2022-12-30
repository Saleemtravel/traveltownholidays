import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
const Navbar = () => {
  const { openSubmenu, closeSubmenu, setIsSidebarOpen } = useAppContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <Wrapper onMouseOver={handleSubmenu}>
      <div className={"nav-Center"}>
        <NavLink to='/' className='logo-bg'>
          <Logo />
        </NavLink>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active " : "link";
              }}
              to='/'
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active link-btn" : "link link-btn";
              }}
              to='domestic-packages'
              onMouseOver={displaySubmenu}
            >
              domestic
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active link-btn" : "link link-btn";
              }}
              to='international-packages'
              onMouseOver={displaySubmenu}
            >
              international
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active" : "link";
              }}
              to='aboutUs'
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "link active" : "link";
              }}
              to='ContactUs'
            >
              contact us
            </NavLink>
          </li>
        </ul>
        <div className='nav-contact'>
          <a
            href='tel:+918971882060'
            className='align link'
            aria-label='telephone'
          >
            <BsFillTelephoneForwardFill />
            +918971882060
          </a>
          <a
            href='tel:+919686879898'
            className='align link'
            aria-label='telephone'
          >
            <BsFillTelephoneForwardFill />
            +919686879898
          </a>
        </div>
        <button
          type='button'
          onClick={() => {
            setIsSidebarOpen(true);
          }}
          className={"icon-btn"}
        >
          <FaBars />
        </button>
      </div>
    </Wrapper>
  );
};

const scale = keyframes`
  0%
  {
    transform: scale( 1 );
  }
 50%
  {
    transform: scale( 1.5 );
  }
  100%
  {
    transform: scale( 1 );
  }
`;

const Wrapper = styled.nav`
  height: var(--nav-height);
  color: var(--grey-800);
  background: var(--primary-200);

  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  margin: 0;
  .nav-Center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .icon-btn {
    font-size: 1.5rem;
    animation: ${scale} 1s infinite;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--grey-800);
  }
  ul {
    display: none;
  }

  .nav-contact {
    display: none;
  }

  @media screen and (min-width: 560px) {
    .nav-Center {
      width: 95vw;
    }
    ul {
      display: flex;
      justify-content: space-between;
    }

    .icon-btn {
      display: none;
    }
    .nav-contact {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  }
`;
export default Navbar;
