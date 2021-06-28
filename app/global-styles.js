import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    --bs-body: var(--bs-light); 
    --bs-color: #141414; 

    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: var(--bs-body);
    color: var(--bs-color);
    font-size: 14px;
  }

  body.dark-mode {
    --bs-body: #141414; 
    --bs-color: #d2d2d2;
  
    background-color: var(--bs-body);
    color: var(--bs-color);

    .modal-content {
      background-color: var(--bs-body);
      color: var(--bs-color);
    }
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  .dropdown-toggle {
    &:after {
      content: none;
    }
  }

  .dropdown-menu-end {
    right: 0;
  }
`;

export default GlobalStyle;
