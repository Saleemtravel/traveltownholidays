import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Carousel = ({ carouselList }) => {
  const [index, setIndex] = useState(0);

  const btns = Array.from(carouselList, (_, index) => index + 1);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > carouselList.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = carouselList.length - 1;
      }
      return index;
    });
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > carouselList.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, carouselList.length]);
  return (
    <Wrapper aria-roledescription='carousel'>
      {carouselList.map((pack, packIndex) => {
        const { imgURL, shortDescription, imgDescription } = pack.mainPackage;
        const destination = pack.destination;
        const path = `/packages/${pack.destination}`;
        let position = "nextSlide";

        if (packIndex === index) {
          position = "activeSlide";
        }
        if (
          packIndex === index - 1 ||
          (index === 0 && packIndex === pack.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article
            key={index}
            className={position}
            aria-roledescription='slide'
            aria-label={`${index} of 6`}
          >
            <img src={imgURL} alt={imgDescription} className={"img"} />
            <div className='details-container'>
              <div className='details'>
                <h2>{destination}</h2>
                <p>{shortDescription}</p>
                <div>
                  <Link to={path} className='btn'>
                    {"visit page"}
                  </Link>
                </div>
                <div className='btn-container' aria-hidden='true'>
                  {btns.map((_, btnIndex) => (
                    <button
                      key={btnIndex}
                      onClick={() => setIndex(btnIndex)}
                      className={btnIndex === index ? "active" : null}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            <button className='prev' onClick={prevSlide} aria-hidden='true'>
              <FiChevronLeft />
            </button>
            <button className='next' onClick={nextSlide} aria-hidden='true'>
              <FiChevronRight />
            </button>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  height: 70vh;
  position: relative;
  letter-spacing: var(--letterSpacing);
  overflow: hidden;
  text-align: center;
  article {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
  h2,
  p {
    margin-bottom: 0.25rem;
  }
  .details-container {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
  }
  .details {
    color: var(--white);
    margin: 0 auto;
    display: grid;
    place-content: center;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.75rem;
    }
    h1,
    p {
      margin-bottom: 0.05rem;
      padding-bottom: 0;
    }
  }
  .btn-container {
    width: 70%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
  }

  .btn-container button {
    cursor: pointer;
    width: 1.5rem;
    height: 0.2rem;
    flex: 0 1 auto;
    background: var(--white);
    opacity: 0.5;
    padding: 0;
    border: 0;
  }
  .btn-container .active {
    opacity: 1;
  }

  .prev,
  .next {
    cursor: pointer;
    font-size: 3rem;
    background: transparent;
    position: absolute;
    top: 40%;
    transform: translateY(-40%);
    padding: 1rem 0.5rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    color: var(--primary-500);
  }

  .prev:hover,
  .next:hover {
    background: var(--primary-500);
    color: var(--white);
    opacity: 0.5;
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }

  @media screen and (min-width: 560px) {
    height: 100vh;
    .details {
      h1 {
        font-size: 3.052rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
    h2,
    p {
      margin-bottom: 0.5rem;
    }
    .prev,
    .next {
      padding: 2rem 2.5rem;
      font-size: 4rem;
      height: 100%;
      top: 0;
      transform: translateY(0%);
    }

    .btn-container {
      width: 90%;
    }

    .btn-container button {
      width: 2rem;
    }
  }
`;

export default Carousel;
