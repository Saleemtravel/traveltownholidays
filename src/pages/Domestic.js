import heroImg from "../images/undraw_by_the_road_re_vvs7.svg";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { Carousel, PackageCard } from "../components";
const Domestic = () => {
  const { getDomesticPackagesAll } = useAppContext();
  const domestic = getDomesticPackagesAll();
  const carouselList = domestic.filter((pack) => pack.carousel).splice(0, 5);
  document.title = "Travel Town Holidays | Domestic Packages";
  return (
    <Wrapper>
      <section className='hero'>
        <div className='hero-content'>
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
        <div className='hero-img-container'>
          <img src={heroImg} alt='person standing road side' className='img' />
        </div>
      </section>
      <Carousel carouselList={carouselList} />
      <section className='packList'>
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
      padding: 4rem 2rem;
      margin: 1rem 0.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .packList {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default Domestic;
