
import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { BlurredUpImage } from './BlurredUpImage';

const HeaderArea = styled.div`
@media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas:
    "header-image  name"
    "header-image  overview";
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
    grid-template-areas: 
    "name"
    "header-image"
    "overview";
}
`

const HeaderImage = styled.div`
    grid-area: header-image;
`

const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background-color: var(--lightgreen);
    text-align: center;
    padding: 1rem;
    flex-direction: column;
`

const Overview = styled(HeaderSection)`
    grid-area: overview;
`

const Name = styled(HeaderSection)`
    grid-area: name;
`


const Header = () => (
    <HeaderArea>
        <HeaderImage>
            <BlurredUpImage lowQualitySrc='/images/header-compressed.jpg' highQualitySrc='/images/header.jpg'></BlurredUpImage>
        </HeaderImage>
        <Name>
            <h1>
                {'Elizabeth & Keith'}
            </h1>
        </Name>
        <Overview>
            <h2>
                October 16, 2021
                <br /> Washington, DC
            </h2>
            <Link href="#details">
                <a>Event Details</a>
            </Link>
            <Link href="#recommendations">
                <a>Recommendations</a>
            </Link>
            <Link href="#story">
                <a>Our Story</a>
            </Link>
            <Link href="#registry">
                <a>Registry</a>
            </Link>
        </Overview>
    </HeaderArea>
);

export { Header }