import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Whitney Medium';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Medium'), url('/fonts/whitney/whitneymedium.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Medium Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Medium Italic'), url('/fonts/whitney/whitneymediumitalic.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Bold';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Bold'), url('/fonts/whitney/whitneybold.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Semibold Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Semibold Regular'), url('/fonts/whitney/whitneysemibold.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Book Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Book Regular'), url('/fonts/whitney/whitneybook.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Light Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Light Regular'), url('/fonts/whitney/whitneylight.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Semibold Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Semibold Italic'), url('/fonts/whitney/WhitneySemiboldItalic.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Book Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Book Italic'), url('/fonts/whitney/whitneybookitalic.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Whitney Light Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Whitney Light Italic'), url('/fonts/whitney/whitneylightitalic.woff') format('woff');
  }

@font-face {
  font-family: "Lightheartedly";
  src: local('Lightheartedly'), url("/fonts/lightheartedly/Lightheartedly.ttf");
}

@font-face {
  font-family: "Ledger";
  src: url("/fonts/ledger/Ledger-Regular.ttf");
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

body {
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
