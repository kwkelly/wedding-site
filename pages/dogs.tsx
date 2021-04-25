import React from "react";
import { GlobalStyle } from "../components/GlobalStyles";
import { readdirSync } from "fs";
import { join } from "path";
import styled from "styled-components";

export async function getStaticProps(_context: any) {
  const images = readdirSync(join(process.cwd(), "public", "dogs"))
    .filter((image) => image.endsWith("jpg"))
    .map((image) => image.replace(/\.[^/.]+$/, ""));
  return {
    props: { images },
  };
}

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * + * {
    margin-top: 1rem;
  }
`;

const PageContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 1rem;
`;

const H1 = styled.h1`
  color: var(--maroon);
`;

type Props = {
  images: string[];
};

const Img = styled.img`
  max-height: calc(100vh - 4rem);
  max-width: calc(min(100vw - 4rem, 1024px));
`;

const Dogs: React.FC<Props> = ({ images }) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <H1>Dogs</H1>
      <PhotoContainer>
        {images.map((image: string) => (
          // <Img src={"/dogs/" + image} alt={image}  />
          <picture key={image}>
            <source srcSet={`/dogs/${image}.webp 1024w`} type="image/webp" />
            <source srcSet={`/dogs/${image}.jpg 1024w`} type="image/jpeg" />
            <Img
              src={`/dogs/${image}.jpg`}
              alt={image}
              srcSet={`/dogs/${image}.jpg 1024w`}
            />
          </picture>
        ))}
      </PhotoContainer>
    </PageContainer>
  );
};

export default Dogs;
