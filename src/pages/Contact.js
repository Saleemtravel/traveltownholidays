import { Form, OfficeLocation } from "../components";
import styled from "styled-components";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

// import contactImg from "../images/undraw_contact_us_re_4qqt.svg";
const Contact = () => {
  document.title = "Travel Town Holidays | Contact Us";
  return (
    <Wrapper>
      <section className='hero'>
        <div className='hero-content'>
          <article>
            <h2 className='title'>contact us</h2>
            <div className='title-underline'></div>
            <p>
              Contact at our helpline number or complete the short inquiry form
              below. After the initial contact, one of our representatives will
              contact you to gather information and suggest useful information
              for your tour. Please call us. We look forward to hearing from
              you!
            </p>
          </article>
          <article>
            <h4>address</h4>
            <div className='flex'>
              <address>
                <strong>HO:</strong> Siddeshwara Nilaya 1st Floor <br />
                Siddanalane cabben pet,
                <br />
                Bangalore 560002 <br />
                <a href='tel:+919686879898' className='align link'>
                  <BsFillTelephoneForwardFill />
                  +919686879898
                </a>
              </address>
              <address>
                <strong>BO:</strong> #2nd Floor Parwaz Plaza <br />
                College Road,
                <br />
                Hosapete 583201
                <br />
                <a href='tel:+918971882060' className='align link'>
                  <BsFillTelephoneForwardFill />
                  +918971882060
                </a>
              </address>
            </div>
          </article>
        </div>
        <div className='hero-img-container'>
          {/* <img
            src={contactImg}
            alt='Globe  with highlighted places'
            className='img'
          /> */}
          <OfficeLocation className='locationMap' />
        </div>
      </section>
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .locationMap {
    width: 100%;
    height: 100%;
  }
  .hero-content {
    display: grid;
    place-content: center;
    gap: 1rem;
  }
  .hero-img-container {
    width: 90%;
    height: 20rem;
    margin: 0 auto;
  }
  .flex {
    justify-content: space-around;
    justify-content: space-between;
  }
`;
export default Contact;
