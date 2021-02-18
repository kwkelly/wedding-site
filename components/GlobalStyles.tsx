import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: 'Whitney Book Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Book Regular'), url('/fonts/whitney/whitneybook.woff') format('woff');
  font-display: swap;
  }
  

  @font-face {
  font-family: 'Whitney Light Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Light Regular'), url('/fonts/whitney/whitneylight.woff') format('woff');
  font-display: swap;
  }
  
@font-face {
  font-family: "Lightheartedly";
  src: local('Lightheartedly'), url("/fonts/lightheartedly/Lightheartedly.woff") format('woff');
  font-display: swap;
}

body {
  margin: 0;
}

:root {
  --maroon: #460f07;
  --pink: #d29294;
  --white: #f3ede9;
  --lightgreen: #69865e;
  --green: #274f11;
  --black: #212114;
}

 h1,
 h2 {
    font-family: 'Lightheartedly'
}

h3 {
    font-family: 'Whitney Light Regular';
    font-size: 24px;
}

body, footer {
  margin: 0;
  font-family: 'Whitney Book Regular';
  color: var(--black);
}

a {
  color: inherit;
}

a:hover {
  color: lightgray;
}


@media (min-width: 768px) {
    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 32px;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 32px;
        margin: 0;
    }

    h2 {
        font-size: 24px;
    }
}
`;
