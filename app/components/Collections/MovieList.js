import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 12px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(9, 1fr);
    grid-column-gap: 16px;
  }
`;
