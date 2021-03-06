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

  .dark-mode {
    .card {
      background-color: var(--bs-dark);
      color: var(--bs-color);

      .card-body {
        &.border-top {
          border-color: var(--bs-body) !important;
        }
      }
    }

    .dropdown {
      .dropdown-menu {
        background-color: var(--bs-dark);
        color: var(--bs-color);
      }
      
      .dropdown-item {
        color: var(--bs-color);
        
        &:hover {
          color: var(--bs-dark);
        }
      }
    }

    .modal-content {
      background-color: var(--bs-body);
      color: var(--bs-color);
    }

    .img-thumbnail {
      background-color: var(--bs-secondary);
      border-color: var(--bs-secondary);
    }

    .list-group-item {
      background-color: transparent;
      color: var(--bs-color);

      &:hover {
        background-color: var(--bs-gray);
      }
    }
  }

  .anchor {
    cursor: pointer;
  }
`;

export default GlobalStyle;
