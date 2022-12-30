import styled from "styled-components";
import heroImg from "../images/undraw_world_re_768g.svg";
import { Carousel, PackageCard } from "../components/";
import { useAppContext } from "../context/appContext";

const Home = () => {
  document.title = "Travel Town Holidays | Home";
  const { getInternationalPackages, getDomesticPackages, getCarouselList } =
    useAppContext();
  const domestic = getDomesticPackages();
  const international = getInternationalPackages();
  const carouselList = getCarouselList();
  return (
    <Wrapper>
      <section className='hero'>
        <div className='hero-content'>
          <h1 className='title'>Travel Town Holidays</h1>
          <div className='title-underline'></div>
          <p>
            At Travel Town Holidays we are committed to providing a professional
            service to our customers, ensuring they benefit from our experience,
            unique style and energy. A highly visible, independent and
            progressive travel agency, we aim to make a difference in everything
            we do.
          </p>
        </div>
        <div className='hero-img-container'>
          <img
            src={heroImg}
            alt='Globe  with highlighted places'
            className='img'
          />
        </div>
      </section>
      <Carousel carouselList={carouselList} />

      <section>
        <div className='page-content'>
          <h1 className='title'>Domestic</h1>
          <div className='title-underline'></div>
          <p>
            India is a country of endless possibilities when it comes to
            tourism. Indian vacation destinations offer exciting experiences for
            families, couples, adventure seekers, spiritual seekers and just
            about any traveler.The best places in India include beaches,
            backwaters and hills. , valleys, passes, deserts, villages, and
            metropolises.
          </p>
          <p>
            Traveling to India leaves you spoiled for choice with such great
            options available. Relaxation, honeymoons, adventures, animal
            safaris, ancient yoga and Ayurvedic knowledge, delicious cuisine,
            royal delights and much more - India has many travel packages to
            choose from.
          </p>
        </div>
        <div className='packList'>
          {domestic.map((pack, index) => {
            const {
              name,
              price,
              places,
              days,
              imgURL,
              shortDescription,
              imgDescription,
            } = pack.mainPackage;
            const destination = pack.destination;
            const path = `/packages/${pack.destination}`;
            return (
              <PackageCard
                {...{
                  name,
                  price,
                  places,
                  days,
                  imgURL,
                  shortDescription,
                  imgDescription,
                  path,
                  destination,
                }}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section>
        <div className='page-content'>
          <h1 className='title'>International</h1>
          <div className='title-underline'></div>
          <p>
            A vacation abroad is sure to be a memory of a lifetime. The idea of
            ​​exploring a foreign land, interacting with people from different
            cultures, learning more about their heritage, visiting numerous
            man-made and natural wonders, and enjoying the local cuisine is
            great.You too can visit the world. If you have a dream, Indian
            Holiday can help. The site offers numerous international travel
            packages from India to some of the most desirable destinations
            around the world.USA, Egypt, Turkey, Bhutan, Singapore, Bali,
            Malaysia, Thailand, Seychelles and other exotics. You can plan your
            vacation in any place.
          </p>
        </div>
        <div className='packList'>
          {international.map((pack, index) => {
            const {
              name,
              price,
              places,
              days,
              imgURL,
              shortDescription,
              imgDescription,
            } = pack.mainPackage;
            const destination = pack.destination;
            const path = `/packages/${pack.destination}`;
            return (
              <PackageCard
                {...{
                  name,
                  price,
                  places,
                  days,
                  imgURL,
                  shortDescription,
                  imgDescription,
                  path,
                  destination,
                }}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .packList {
    display: grid;
    gap: 0.5rem;
  }
  @media screen and (min-width: 720px) {
    .packList {
      grid-template-columns: 1fr 1fr;
      padding: 1rem 2.5rem;
      margin: 1rem 0.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .packList {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default Home;
