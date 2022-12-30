import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useAppContext } from "../context/appContext";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

const footerPageLinks = [
  {
    text: "about us",
    path: "/aboutUs",
    id: 1,
  },
  {
    text: "contact us",
    path: "/contactUs",
    id: 2,
  },
  {
    text: "cancellation policy",
    path: "/cancelation-policy",
    id: 3,
  },
  {
    text: "privacy policy",
    path: "/privacy-policy",
    id: 4,
  },
];

const Footer = () => {
  const { getFooterLinks } = useAppContext();
  const footerLinks = getFooterLinks();

  return (
    <Wrapper>
      <div className='grid'>
        <div>
          <NavLink to='/' className='logo-bg footer-log'>
            <Logo />
          </NavLink>
        </div>
        <article>
          <h4>Company Info</h4>
          <ul>
            {footerPageLinks.map((link) => {
              const { id, path, text } = link;
              return (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return isActive ? "link active" : "link";
                    }}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </article>
        <article>
          <h4>Our Tours</h4>
          <ul>
            {footerLinks.map((link) => {
              const { id, path, text } = link;
              return (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return isActive ? "link active" : "link";
                    }}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </article>
        <article>
          <h4>address</h4>
          <address>
            <strong>HO:</strong> Siddeshwara Nilaya 1st Floor <br />
            Siddanalane cabben pet,
            <br />
            Bangalore 560002
          </address>
          <address>
            <strong>BO:</strong> #2nd Floor Parwaz Plaza <br />
            College Road,
            <br />
            Hosapete 583201
          </address>
        </article>
        <article>
          <h4>support info</h4>
          <ul>
            <li>We are available 24x7 Mon-Sun</li>
            <li>
              <a
                href='mailto:info@traveltownholidays.com'
                className='align link email'
              >
                <MdEmail />
                info@traveltownholidays.com
              </a>
            </li>
            <li>
              <a href='tel:+919686879898' className='align link'>
                <BsFillTelephoneForwardFill />
                +919686879898
              </a>
            </li>
            <li>
              <a href='tel:+918971882060' className='align link'>
                <BsFillTelephoneForwardFill />
                +918971882060
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div>
        <SocialLinks className={"social-icons"} />
        <p>© Copyright {new Date().getFullYear()} Travel Town Holidays</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 1rem;
  width: 100%;
  display: grid;
  row-gap: 1.25rem;
  text-align: center;
  background: var(--primary-200);
  color: var(--grey-800);

  .grid {
    display: grid;
    gap: 0.5rem;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  p {
    max-width: none;
  }
  .social-icons {
    display: flex;
    justify-content: space-evenly;
    max-width: 15rem;
    margin: 1rem auto;
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

  .email {
    text-transform: lowercase;
  }
  .footer-log {
    padding: 1rem 0.2rem;
    padding-top: 3.5rem;
  }
  @media screen and (min-width: 560px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    .grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
export default Footer;
