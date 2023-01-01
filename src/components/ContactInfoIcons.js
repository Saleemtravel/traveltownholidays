import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const ContactInfoIcons = ({ className }) => {
  return (
    <Wrapper className={className}>
      <ul>
        <li>
          <a aria-label='email' href='mailto:info@traveltownholidays.com'>
            <MdEmail className='contact-icon' />
          </a>
        </li>
        <li>
          <a aria-label='telephone' href='tel:+919686879898'>
            <BsFillTelephoneForwardFill className='contact-icon' />
          </a>
        </li>
        {/* <li>
          <a aria-label='telephone' href='tel:+918971882060'>
            <BsFillTelephoneForwardFill className='contact-icon' />
          </a>
        </li> */}
      </ul>
      <SocialLinks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 0;
  width: 0;
  overflow: hidden;
  transition: var(--transition);
`;

export default ContactInfoIcons;
