import styled from "styled-components";
import ReadMore from "../components/ReadMore";
import aboutImg from "../images/undraw_team_work_k-80-m.svg";

const About = () => {
  document.title = "Travel Town Holidays | About";
  return (
    <Wrapper id='aboutUs'>
      <section className='hero'>
        <div className='hero-content'>
          <h2 className='title'> About US</h2>
          <div className='title-underline'></div>
          <ReadMore>
            Established with the focus on creating unique and unforgettable
            travel experiences for you, it has been our pleasure to be your
            chosen agency. We aim to continue to delight you with our services
            and offerings and to enjoy a lasting relationship together. Equipped
            with deep local knowledge for each destination, we assure you
            quality itineraries to suit the travel desires of you and your loved
            ones. From relaxing tours to exhilarating adventures, TTH will be
            there with you for that quality time abroad. We will carry on with
            initiatives to fulfil your ever-growing travel needs. No matter
            where you go, it will always be about you. Why? Because we believe
            in creating a lasting travel memory with Travel Town Holidays,
            Always.
          </ReadMore>
        </div>
        <div className='hero-img-container'>
          <img src={aboutImg} alt='people thinking' className='img' />
        </div>
      </section>

      <section className='section'>
        <div className='section-center'>
          <article className='container'>
            <h3>Our organization provides the following service</h3>

            <ReadMore isList={"true"}>
              <li>Domestic and International Holiday Packages</li>
              <li>Hotel reservations</li>
              <li>Car Rentals</li>
              <li>Flight Ticketing</li>
              <li>Tourist Visa Assistance</li>
              <li>Consulting Travel Solutions</li>
              <li>COMPANY VISION</li>
              <li>
                We aspire to be the most sought after Travel/ Destination
                Management Company
              </li>
            </ReadMore>
          </article>
          <article className='container'>
            <h3>company mission statement</h3>
            <ReadMore>
              At Travel Town Holidays we are committed to providing a
              professional service to our customers, ensuring they benefit from
              our experience, unique style and energy. A highly visible,
              independent and progressive travel agency, we aim to make a
              difference in everything we do.
            </ReadMore>
          </article>

          <article className='container'>
            <h3>company values</h3>
            <ReadMore isList={"true"}>
              <li>
                At Travel Town Holidays, we're guided by a set of core values —
                Trust, Dedication and Personal service — and we ensure that
                these hallmarks are met at every stage of your journey.
              </li>
              <li>
                We are PERSONALLY ACCOUNTABLE for any challenge brought to our
                attention.
              </li>
              <li>
                We gain TRUST by treating others with integrity, respect and
                fairness.
              </li>
              <li>
                We achieve PRIDE & EXCELLENCE by being innovative and creative
              </li>
              <li>
                We COLLABORATE to support the objectives of the company and our
                preferred relationships.
              </li>
              <li>
                We properly represent our company with RESPONSIBLE CITIZENSHIP
                in and out of the workplace.
              </li>
            </ReadMore>
          </article>
          <article className='container'>
            <h3>dedication</h3>
            <ReadMore>
              We know your time is valuable, so our team is committed to
              providing you with the best travel experience possible, from
              before you book your holiday to after your journey has ended.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>why book with us</h3>
            <ReadMore>
              Your time is important. When you choose Travel Town Holidays, we
              dedicate time to organising a first-rate experience using our
              regional knowledge, so you can spend your own time however you
              please. And once you are travelling, each day of your personalised
              itinerary is set up to be memorable.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>travel with confidence</h3>
            <ReadMore>
              Look forward to travelling again and rest assured that you are
              supported every step of the way. Your safety and wellbeing is at
              the heart of everything we do, which is why we have established
              new protocols to ensure you Travel with Confidence.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>What Makes Us Unique?</h3>
            <ReadMore>
              One travel expert throughout, Many agencies force you to deal with
              multiple people throughout the booking process, making it
              disjointed and impersonal. At Travel Town you will deal with the
              same travel expert from the moment of initial contact until you
              are safely back at home.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>Experience & Accuracy</h3>
            <ReadMore>
              Our staff are experienced, well-travelled and have years of travel
              knowledge among them. They draw upon their own first-hand
              experiences when customizing vacations for you.
            </ReadMore>
          </article>

          <article className='container'>
            <h3>reputation</h3>
            <ReadMore>
              At Travel Town Holidays, we strive to earn repeat business from
              you and want you to recommend us to your friends and family. Your
              referrals are extremely valuable to us and we know that we have to
              work diligently to deserve them.;
            </ReadMore>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ul li:before {
    content: url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M15.5%205H11l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M8.5%205H4l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E);
    color: var(--primary-500);
    /* background: var(--primary-500); */
    margin-right: 0.5rem;
  }
`;
export default About;
