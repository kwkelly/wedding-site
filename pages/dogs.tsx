import React from "react";
import { GlobalStyle } from "../components/GlobalStyles";
import { readdirSync } from "fs";
import { join } from "path";
import Masonry from "react-masonry-component";
import styled from "styled-components";

export async function getStaticProps(_context: any) {
  const images = readdirSync(join(process.cwd(), "public", "dogs"));
  return {
    props: { images },
  };
}

const PhotoContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 1rem;

  & > h1 {
    color: var(--maroon);
  }
`;

type Props = {
  images: string[];
};

const Dogs: React.FC<Props> = ({ images }) => {
  const masonryOptions = {
    fitWidth: true,
    columnWidth: 400,
    gutter: 5,
  };

  return (
    <PhotoContainer>
      <GlobalStyle />
      <h1>Dogs</h1>
      <Masonry
        className={"grid"}
        elementType={"div"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {images.map((image: string) => (
          <div style={{ width: "400px" }} key={image}>
            <img src={"/dogs/" + image} height="100%" width="100%" />
          </div>
        ))}
      </Masonry>
    </PhotoContainer>
  );
};

export default Dogs;
