import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const Accordion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper>
      <div className='header' role='heading' aria-level={1}>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => setShowInfo(!showInfo)}
          role='presentation'
          aria-label='toggle details '
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <>{info}</>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.25rem 0.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  p {
    margin-top: 0.5rem;
  }

  h4 {
    margin-bottom: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Accordion;
