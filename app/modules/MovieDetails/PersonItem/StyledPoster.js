import styled, { css } from 'styled-components';

const StyledPoster = styled.div`
  width: 100%;
  padding-top: 100%;
  background-color: var(--bs-secondary);

  ${props =>
    props.poster &&
    css`
      background: url(${props.poster}) no-repeat center center;
      background-size: cover;
    `};

  ${props =>
    !props.poster &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--bs-secondary);
    `};
`;

export default StyledPoster;
