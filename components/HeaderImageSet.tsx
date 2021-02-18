import React from "react";
import styled from "styled-components";

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const HeaderImageSet = () => {
  return (
    <picture>
      <source
        srcSet="/images/header-300.webp 300w, /images/header-600.webp 600w, /images/header-1200.webp 1200w, /images/header-1200.webp 1200w, /images/header-2400.webp 2400w"
        type="image/webp"
      />
      <source
        srcSet="/images/header-300.jpg 300w, /images/header-600.jpg 600w, /images/header-1200.jpg 1200w, /images/header-1200.jpg 1200w, /images/header-2400.jpg 2400w"
        type="image/jpeg"
      />
      <Img
        src={"/images/header.jpg"}
        alt={"Us at the Library of Congress"}
        srcSet="/images/header-300.jpg 300w, /images/header-600.jpg 600w, /images/header-1200.jpg 1200w, /images/header-1200.jpg 1200w, /images/header-2400.jpg 2400w"
      />
    </picture>
  );
};

export { HeaderImageSet };
