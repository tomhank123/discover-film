import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 140px;
  overflow: hidden;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 1;

    white-space: nowrap;
    text-align: right;
    letter-spacing: -18px;
    font-family: var(--bs-font-monospace);
    font-size: 220px;
    font-weight: 900;
    -webkit-text-fill-color: #000;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #555;
  }
`;
