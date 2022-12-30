import heroImg from "../images/undraw_connected_world_wuay.svg";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { Carousel, PackageCard } from "../components";

const International = () => {
  const { getInternationalPackagesAll } = useAppContext();
  const international = getInternationalPackagesAll();
  const carouselList = international
    .filter((pack) => pack.carousel)
    .splice(0, 5);
  document.title = "Travel Town Holidays | International Packages";
  return (
    <Wrapper>
      <section className='hero'>
        <div className='hero-content'>
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
        <div className='hero-img-container'>
          <img
            src={heroImg}
            alt='world map with tourist places highlighted'
            className='img'
          />
        </div>
      </section>
      <Carousel carouselList={carouselList} />

      <section className='packList'>
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
export default International;
