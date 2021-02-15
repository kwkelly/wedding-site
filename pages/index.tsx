import Layout from '../components/Layout'
import Link from 'next/link';
import { InfoSection } from '../components/InfoSection';
import { Header } from '../components/Header';
import styled from 'styled-components';
import {GlobalStyle} from '../components/GlobalStyles'

const DonateIcon = styled.img`
width: 100%;
`

const DonateLink = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  text-align: center;

  img {
  opacity: 1;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover img{
    opacity: 0.75;
  }​

`

const DonateDescription = styled.div`
`

const DonateArea = styled.div`
display: grid;
grid-template-columns: 125px 1fr;
grid-gap: 0px;
& > * {
  border-top: 1px solid var(--lightgreen);
}
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header></Header>
    <Layout title="Elizabeth and Keiths Wedding Site">
      <InfoSection id="details">
        <h2>Event Details</h2>
        <p>
          The ceremony will be held at <a href="https://fathomgallery.org">Fathom Gallery</a> on October, 16 2021 at 4:00pm. More details to come.
        </p >
      </InfoSection>
      <InfoSection>
        <h2>Recommendations</h2>
        <p>
          We recommend you stay at....
        </p >
        <p>
          We recommend you eat at....
        </p >
      </InfoSection>
      <InfoSection>
        <h2 id="story">Our Story</h2>
        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis rhoncus justo, ut sagittis leo iaculis vitae. Nulla sodales nibh eget sapien tincidunt, eget blandit tortor ullamcorper. Mauris nec neque vitae massa elementum rutrum. Sed iaculis
        tortor lobortis sapien cursus dapibus a quis ipsum. Nam id dui ultrices, porttitor sapien et, dictum nibh. Curabitur sit amet maximus sapien. In id vestibulum lacus. Donec sollicitudin augue purus, porttitor egestas dui tempor at. Praesent
        finibus maximus neque, et euismod tellus ultrices ullamcorper. Maecenas efficitur imperdiet tempus. Suspendisse pretium accumsan neque, nec fringilla nisl viverra non. Praesent id nulla id neque aliquam consequat in volutpat nisl. Sed eget
        est pretium metus lobortis pulvinar quis in arcu. Nunc vulputate dictum turpis vel porttitor. Pellentesque venenatis diam a arcu convallis, viverra pretium felis laoreet.
     </p>
      </InfoSection>
      <InfoSection>

        <h2 id="registry">Registry</h2>
        <p>
          We don't really need anything and don't have space for any more stuff, so instead of a traditional registry, we're encouraging our guests to donate to causes that we feel strongly about.
          </p>

        <DonateArea>
          <Link href="https://www.citydogsrescuedc.org/donate.html">
              <a>
            <DonateLink>
                <DonateIcon src="/images/citydogs.png" />
                  City Dogs Rescue
            </DonateLink>
              </a>
          </Link>
          <DonateDescription>
            <p>
              City Dogs Rescue is a DC animal rescue organization that rescues adoptable dogs and cats in overcrowded and high-kill shelters, where resources are severely limited.
          </p>
            <p>
              All of our foster dogs have come from City Dogs Rescue.
          </p>
            <p>
              When making your donation, you can select "This is a donation in honor of a person, event, or pet" so that we will get notified of the gift you've made.
          </p>
          </DonateDescription>
          <Link href="https://www.marchofdimes.org/giving/support-general.aspx">
              <a >
            <DonateLink>
                <DonateIcon src="/images/marchofdimes.png" />
                  March of Dimes
            </DonateLink>
            </a>
          </Link>
          <DonateDescription>
            <p>
              March of Dimes leads the fight for the health of all moms and babies. They believe that every baby deserves the best possible start. Unfortunately, not all babies get one. They are changing that.
          </p>
            <p>
              When making your donation, you can select "Dedicate my donation: In honor of" so that we will get notified of the gift you've made.
          </p>
          </DonateDescription>
        </DonateArea>
        <p>
          If you'd still like to make a monetary gift to us...
            </p>

      </InfoSection>
    </Layout>
  </>
)

export default IndexPage
