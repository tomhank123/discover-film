import styled, { css } from 'styled-components';

const StyledPoster = styled.div`
  width: 100%;
  padding-top: 150%;
  background-color: var(--bs-secondary);
  border-radius: ${({ theme }) => theme.shape.borderRadiusLg};

  ${props =>
    props.poster &&
    css`
      background: url(${props.poster}) no-repeat center center;
      background-size: cover;
    `};

  ${props =>
    !props.poster &&
    css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bs-dark);

      &:before {
        content: '${props.fallback}';
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        padding: 1rem;
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
      }
    `};
`;

export default StyledPoster;
