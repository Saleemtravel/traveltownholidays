import ReadMore from "../components/ReadMore";
import styled from "styled-components";
import privacyImage from "../images/undraw_secure_files_re_6vdh.svg";

const Privacy = () => {
  document.title = "Travel Town Holidays | Privacy policy";
  return (
    <Wrapper>
      <section className='hero'>
        <div className='hero-content'>
          <h2 className='title'>privacy policy </h2>
          <div className='title-underline'></div>
          <ReadMore>
            We reserve our right to amend or cancel a tour booked by you,
            without assigning any reason. Such amendment or cancellation may be
            due to circumstances beyond our control. In such cases, we will
            offer you alternative tour dates / tours or you would have the
            option of traveling as individual travelers, if you were booked on a
            group tour. If the alternative date / tour is not acceptable, we
            would refund the money paid by you after deducting any costs
            incurred by us on your behalf, within a period of forty five days
            from the date of amendment or cancellation. However, we would not be
            responsible or liable to pay any compensation or damages or
            consequential loss or to refund any other expense incurred by you
          </ReadMore>
        </div>
        <div className='hero-img-container'>
          <img
            src={privacyImage}
            alt='two pages a man besides them with a secured lock icon'
            className='img'
          />
        </div>
      </section>
      <section className='section'>
        <div className='section-center'>
          <article className='container'>
            <h3>how we use your personal data</h3>
            <p>We use your Personal Data in order to:</p>

            <ul>
              <li>
                Provide our service to you. Communicating and interacting with
                you; and notifying you of changes to any services.
              </li>
              <li>Enhance your customer experience</li>
              <li>Fulfil an obligation under law or contract</li>
              <li>
                We use your Personal Data on legitimate grounds and/or with your
                Consent.
              </li>
            </ul>
            <p>
              On the grounds of entering into a contract or fulfilling
              contractual obligations, we Process your Personal Data for the
              following purposes:
            </p>
            <ul>
              <li>To identify you</li>
              <li>To provide you a service or to send/offer you a product</li>
              <li>To communicate either for sales or invoicing</li>
            </ul>
            <p>
              On the ground of legitimate interest, we Process your Personal
              Data for the following purposes:
            </p>
            <ul>
              <li>
                To send you personalized offers* (from us and/or our carefully
                selected partners)
              </li>
              <li>
                To administer and analyze our client base (purchasing behavior
                and history) in order to improve the quality, variety, and
                availability of products/ services offered/provided
              </li>
              <li>To conduct questionnaires concerning client satisfaction</li>
              <li>
                For additional purposes that are not mentioned here, but are
                compatible with the original purpose for which the data was
                gathered
              </li>
            </ul>
            <p>
              As long as you have not informed us otherwise, we consider
              offering you products/services that are similar or same to your
              purchasing history/browsing behavior to be our legitimate
              interest.
            </p>
          </article>
          <article className='container'>
            <h3>privacy policy promise</h3>
            <p>
              While information is the cornerstone of our ability to provide
              superior service, our most important asset is our clients’ trust.
              Keeping client information secure, and using it only as our
              clients would want us to, is a top priority for all of us at
              Travel Town Holidays. Here then, is our promise to our individual
              customers:
            </p>
            <ul>
              <ReadMore isList={"true"}>
                <li>
                  We will safeguard, according to strict standards of security
                  and confidentiality, any information our customers share with
                  us.
                </li>
                <li>
                  We will limit the collection and use of customer information
                  to the minimum we require to deliver superior service to our
                  customers, which includes advising our customers about our
                  products, services and other opportunities, and to administer
                  our business.
                </li>
                <li>
                  We will permit only authorized employees, who are trained in
                  the proper handling of customer information, to have access to
                  that information. Employees who violate our Privacy Promise
                  will be subject to our normal disciplinary process.
                </li>
                <li>
                  We will not reveal customer information to any external
                  organization unless we have previously informed the customer
                  in disclosures or agreements, or are required by law.
                </li>
                <li>
                  We will always maintain control over the confidentiality of
                  our customer information. We may, however, share customer
                  information with reputable companies when a customer has
                  expressed an interest in their service or product. Please note
                  that this Privacy Policy does not apply to these other
                  company’s use of customer information.
                </li>
                <li>
                  We will attempt to keep customer files complete, up-to-date,
                  and accurate. We will tell our customers how and where to
                  conveniently access their information (except when we’re
                  prohibited by law) and how to notify us about errors which we
                  will promptly correct.
                </li>
              </ReadMore>
            </ul>
          </article>
          <article className='container'>
            <h3>who else can access your personal data</h3>
            <ReadMore>
              We do not share your Personal Data with strangers. Personal Data
              about you is in some cases provided to our trusted partners in
              order to either make providing the service to you possible or to
              enhance your customer experience.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>cookies policy</h3>
            <ReadMore>
              We use cookies on our Website. By continuing to browse our website
              or close the cookies banner, you consent to the use of cookies.
            </ReadMore>
          </article>

          <article className='container'>
            <h3>security</h3>
            <ReadMore>
              The personally identifiable information we collect about you is
              stored in limited-access servers. We will maintain safeguards to
              protect the security of these servers and your personally
              identifiable information.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>internet based transfers</h3>
            <ReadMore>
              Given that the Internet is a global environment, using the
              Internet to collect and process personal data necessarily involves
              the transmission of data on an international basis. Therefore, by
              browsing https://www.travel townholidays.com and communicating
              electronically with us you acknowledge and agree to our processing
              of personal data in this way.
            </ReadMore>
          </article>
          <article className='container'>
            <h3>policy modification</h3>
            <ReadMore>
              We may change this Privacy Policy from time to time. We will post
              any changes here, so be sure to check back periodically. However,
              please be assured that if the Privacy Policy changes in the
              future, we will not use the personal information you have
              submitted to us under this Privacy Policy in a manner that is
              materially inconsistent with this Privacy Policy, without your
              prior consent.
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
export default Privacy;
