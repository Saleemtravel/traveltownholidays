import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const SocialLinks = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a
          aria-label='Click to visit our instagram page'
          href='https://instagram.com/traveltownholidays?utm_medium=copy_link'
          target='_blank'
          rel='noreferrer'
        >
          <BsInstagram className='contact-icon' />
        </a>
      </li>
      <li>
        <a
          aria-label='Click to visit our instagram page'
          href='https://www.facebook.com/traveltownholidays2021/'
          target='_blank'
          rel='noreferrer'
        >
          <BsFacebook className='contact-icon' />
        </a>
      </li>
      <li>
        <a
          aria-label='Click to visit our instagram page'
          href='https://wa.me/919686879898'
          target='_blank'
          rel='noreferrer'
        >
          <BsWhatsapp className='contact-icon' />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
