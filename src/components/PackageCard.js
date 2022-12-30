import { Link } from "react-router-dom";
import styled from "styled-components";
import formatter from "../utils/formatter";
const PackageCard = ({
  name,
  price,
  places,
  days,
  imgURL,
  shortDescription,
  imgDescription,
  path,
  destination,
}) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={imgURL} alt={imgDescription} className='img' />
      </div>
      <div className='content'>
        <header className='card-header'>
          <h3>{destination || name}</h3>
          <p className='price'>{`${formatter.format(price)}/- PP`}</p>
        </header>
        <p>{places}</p>
        <p>{days}</p>
        <p>{shortDescription}</p>
        {path && (
          <footer className='card-footer'>
            <Link to={path} className='btn link'>
              visit page
            </Link>
          </footer>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  width: 20rem;
  margin: 1.5rem auto;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  .img-container {
    width: 100%;
    height: 15rem;
  }
  .img {
    border-radius: var(--borderRadius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: var(--shadow-1);
  }
  .content {
    padding: 1rem;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 0.75rem;
  }
  p,
  h3 {
    margin: 0;
  }
  .price {
    color: var(--primary-500);
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1.5px;
  }

  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
  :hover {
    box-shadow: var(--shadow-4);
    transform: scale(1.1);
  }
`;

export default PackageCard;
