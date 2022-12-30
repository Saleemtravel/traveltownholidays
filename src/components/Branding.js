import styled, { keyframes } from "styled-components";
import ContactInfoIcons from "./ContactInfoIcons";
import { GrContactInfo } from "react-icons/gr";
import { useState } from "react";

const Branding = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <Wrapper>
      <ContactInfoIcons
        className={` ${showContact ? "social-icons-show" : null}`}
      />

      <button
        type='button'
        onClick={() => setShowContact(!showContact)}
        aria-label='open social links list'
      >
        <GrContactInfo className={"icon"} />
      </button>
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
const Wrapper = styled.aside`
  position: fixed;
  margin-bottom: 1rem;
  margin-left: 1rem;
  bottom: 0;
  left: 0;
  button {
    background: var(--primary-800);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: ${scale} 1s infinite;
    border: none;
    cursor: pointer;
  }

  .social-icons-show {
    height: auto;
    width: auto;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }
  a {
    color: var(--primary-300);
    background: var(--primary-800);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem;
    border-radius: 50%;
    transition: var(--transition);
    margin-top: 0.25rem;
  }
  a:hover {
    color: var(--primary-800);
    background: var(--primary-300);
  }

  .icon {
    font-size: 1.5rem;
  }
`;

export default Branding;
