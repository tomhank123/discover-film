import styled from 'styled-components';

export default styled.div.attrs({ className: 'ratio' })`
  --bs-aspect-ratio: ${({ width, height }) =>
    `calc(${height} / ${width} * 100%)`};
  border-radius: inherit;
`;
