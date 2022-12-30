import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReadMore from "../components/ReadMore";
import { Accordion, ModalForm, PackageCard } from "../components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import formatter from "../utils/formatter";
import { ImLocation2 } from "react-icons/im";
import { HiCalendarDays } from "react-icons/hi2";

const Packages = () => {
  const { packageName } = useParams();
  const { getPackage, openModalForm, isModalOpen } = useAppContext();
  const navigate = useNavigate();
  const pack = getPackage({ packageName });
  const { hash } = useLocation();
  document.title = `Travel Town Holidays | ${packageName}`;
  useEffect(() => {
    if (!pack) {
      navigate("/error");
    }
  }, [pack, navigate]);

  if (pack) {
    const { mainPackage, otherPackages } = pack;
    const { name, price, places, shortDescription, days, imgURL, details } =
      mainPackage;
    const sections = details;
    return (
      <Wrapper>
        <section className='package-hero'>
          <div className='img-container-hero'>
            <img src={imgURL} alt='' className='img' />
          </div>
          <div className='details-container'>
            <div className='details'>
              <h1>{name}</h1>
              <p>
                <ImLocation2 className='icon' />
                {places}
              </p>
              <div className='flex'>
                <p className='price'>{`${formatter.format(price)}/- PP`}</p>
                <p>
                  <HiCalendarDays className='icon' />
                  {days}
                </p>
                <button className='btn' onClick={openModalForm}>
                  enquir now
                </button>
              </div>

              <p className='desc-width'>{shortDescription}</p>
            </div>
          </div>
        </section>
        <aside className='tabList'>
          <ul id='page-nav' role='tablist'>
            {sections.map((item, index) => {
              const { sectionName, sectionID } = item;
              return (
                <li key={index}>
                  <Link
                    to={`#${sectionID}`}
                    className={`link ${
                      hash === `#${sectionID}` ? "active" : null
                    }`}
                  >
                    {sectionName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className='packContent'>
          <div>
            {sections.map((item, index) => {
              const {
                sectionName,
                sectionID,
                sectionDetails,
                displayList,
                count,
              } = item;

              if (sectionName === "itinerary") {
                return (
                  <section id={sectionID} className='section' key={index}>
                    <div className='section-center container'>
                      <h3>{sectionName}</h3>
                      {sectionDetails.map((daysList, index) => {
                        const { day, details } = daysList;
                        const info = details.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ));
                        return (
                          <Accordion key={index} title={day} info={info} />
                        );
                      })}
                    </div>
                  </section>
                );
              }
              if (index === 0) {
                return (
                  <section
                    id={sectionID}
                    className='section  margin-top-neg'
                    key={index}
                  >
                    <div className='section-center container'>
                      <h3>{sectionName}</h3>
                      <ReadMore isList={true} count={count}>
                        {sectionDetails.map((paragraph, index) => {
                          return <p key={index}>{paragraph}</p>;
                        })}
                      </ReadMore>
                    </div>
                  </section>
                );
              }
              if (!displayList) {
                return (
                  <section id={sectionID} className='section' key={index}>
                    <div className='section-center container'>
                      <h3>{sectionName}</h3>
                      <ReadMore isList={true} count={count}>
                        {sectionDetails.map((paragraph, index) => {
                          return <p key={index}>{paragraph}</p>;
                        })}
                      </ReadMore>
                    </div>
                  </section>
                );
              }
              return (
                <section id={sectionID} className='section ' key={index}>
                  <div className='section-center container'>
                    <h3>{sectionName}</h3>

                    <ul>
                      <ReadMore isList={true} count={4}>
                        {sectionDetails.map((listItem, index) => {
                          return <li key={index}>{listItem}</li>;
                        })}
                      </ReadMore>
                    </ul>
                  </div>
                </section>
              );
            })}
          </div>
          <div>
            {otherPackages.map((pack, index) => {
              return <PackageCard {...pack} key={index} />;
            })}
          </div>
        </div>
        {isModalOpen && <ModalForm />}
      </Wrapper>
    );
  }

  return null;
};

const Wrapper = styled.main`
  .package-hero {
    height: 60vh;
    position: relative;
  }
  .img-container-hero {
    width: 100%;
    height: 60vh;
    overflow: hidden;
  }

  .details-container {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0;
  }
  .details {
    color: var(--white);
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    .desc-width {
      max-width: 100%;
    }
    .flex {
      justify-content: space-between;
      width: 100%;
    }
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
    .price {
      color: var(--primary-500);
      font-weight: bold;
      letter-spacing: 1.5px;
      font-size: 1.25rem;
    }
  }

  .packContent {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .section {
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
  .section-center {
    display: block;
    width: unset;
  }

  .tabList {
    max-width: var(--max-width);
    margin: 0 auto;
    position: sticky;
    top: 0;
    padding: 0.25rem;
    border-radius: var(--borderRadius);
    transition: var(--transition);
    box-shadow: var(--shadow-2);
    letter-spacing: var(--letterSpacing);
    background: var(--white);

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      z-index: 100;
    }
    :hover {
      box-shadow: var(--shadow-4);
    }
  }
  @media screen and (min-width: 560px) {
    .details-container {
      padding: 0.1rem 2rem;
    }

    .details {
      h1 {
        font-size: 3.052rem;
      }
      p {
        font-size: 0.75rem;
      }
      .flex {
        width: 50%;
      }
    }
    .package-hero {
      min-height: calc(100vh - 6rem);
    }
    .img-container-hero {
      height: calc(100vh - 6rem);
    }
  }

  @media screen and (min-width: 992px) {
    .packContent {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .tabList {
      top: 1rem;
      padding: 1rem;
      display: inline-block;
      margin: 1rem auto 1rem 60rem;
      ul {
        display: inline-block;
        min-width: 15rem;
        padding: 2rem;
      }
    }
    .margin-top-neg {
      margin-top: -20rem;
    }
  }

  section li:before {
    content: url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M15.5%205H11l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M8.5%205H4l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E);
    color: var(--primary-500);
    /* background: var(--primary-500); */
    margin-right: 0.5rem;
  }
`;
export default Packages;
