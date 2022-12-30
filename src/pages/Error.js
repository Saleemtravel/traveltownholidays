import { Link } from "react-router-dom";
import styled from "styled-components";
import errorImage from "../images/undraw_page_not_found_re_e9o6.svg";

const Error = () => {
  document.title = "Travel Town Holidays | Error Page";
  return (
    <Wrapper className='full-page'>
      <img src={errorImage} alt='error 404 page not found' />
      <h1>Oops!</h1>
      <p>Sorry, Page Not Found</p>

      <Link to='/' className='btn'>
        Visit Home Page
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 3rem 2rem;
  display: grid;
  place-content: center;
  text-align: center;
  p {
    width: 100%;
    max-width: 100%;
  }
  img {
    width: 20rem;
    margin: 1rem auto;
  }
`;
export default Error;
