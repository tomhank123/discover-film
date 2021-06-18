import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;
