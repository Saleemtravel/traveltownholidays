import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const ModalFormButton = () => {
  const { openModalForm } = useAppContext();
  return (
    <Wrapper>
      <button className='btn' onClick={openModalForm} aria-label='open modal'>
        enquir now
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: inline-block;
  margin: 1rem 0.5rem;
  .btn {
    font-size: 2rem;
  }
`;

export default ModalFormButton;
