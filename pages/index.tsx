import Layout from "../components/Layout";
import Link from "next/link";
import { InfoSection } from "../components/InfoSection";
import { Header } from "../components/Header";
import styled from "styled-components";
import { GlobalStyle } from "../components/GlobalStyles";

// const DonateIcon = styled.img`
//   width: 100%;
// `;

const CardThumbnail = styled.img`
  max-width: 75px;
  max-height: 75px;
  grid-area: thumbnail;
  align-self: center;
  margin-right: 1rem;
`;

// const DonateLink = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100px;
//   text-align: center;

//   img {
//   opacity: 1;
//   }

//   &:hover {
//     cursor: pointer;
//   }

//   &:hover img{
//     opacity: 0.75;
//   }​

// `;

// const DonateDescription = styled.div``;

// const DonateArea = styled.div`
//   display: grid;
//   grid-template-columns: 125px 1fr;
//   grid-gap: 0px;
//   & > * {
//     border-top: 1px solid var(--lightgreen);
//   }
// `;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "thumbnail  header"
    "body       body";
`;

const CardHeader = styled.h3`
  grid-area: header;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const CardBody = styled.div`
  grid-area: body;
`;

// const LIcon = styled.li<{ bullet: string }>`
//   list-style-type: "${({ bullet }) => bullet}";
// `;

const roomBlockLink =
  "https://gc.synxis.com/rez.aspx?Hotel=9028&Chain=1003&arrive=10/15/2021&depart=10/17/2021&adult=1&child=0&group=211015CASS";

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header></Header>
    <Layout title="Elizabeth and Keith's Wedding Site">
      <InfoSection id="details">
        <h2>Event Details</h2>
        <p>
          The ceremony will be held at{" "}
          <a href="https://fathomgallery.org">Fathom Gallery</a> on October, 16
          2021 at 4:00pm.
        </p>
        <p>
          Following the ceremony will be a reception catered by{" "}
          <Link href="https://www.timberpizza.com/">
            <a>Timber Pizza Company</a>
          </Link>
          .
        </p>
      </InfoSection>
      <InfoSection id="recommendations">
        <h2>Recommendations</h2>
        <h3>Stay</h3>
        If possible, we recommend that you stay near the event venue. Here are
        some options near Fathom Gallery.
        <Card>
          <CardThumbnail src="/images/viceroy.png" />
          <CardHeader>Viceroy Washington DC</CardHeader>
          <CardBody>
            <p>
              We have a{" "}
              <Link href={roomBlockLink}>
                <a>block of rooms</a>
              </Link>{" "}
              at the{" "}
              <Link href="https://www.viceroydc.com">
                <a>Viceroy Hotel</a>
              </Link>
              , a new and modern boutique hotel just steps away from the wedding
              venue.
            </p>
            <ul>
              <li>1430 Rhode Island Ave NW, Washington, DC 20005</li>
              <li>1-202-742-3100</li>
              <li>
                <Link href="https://www.viceroydc.com">
                  <a>www.viceroydc.com</a>
                </Link>
              </li>
              <li>
                <Link href={roomBlockLink}>
                  <a>Room Block</a>
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>The Darcy</CardHeader>
          <CardBody>
            <p>
              Also very close to the event location is The Darcy, another
              boutique hotel.
            </p>
            <ul>
              <li>1515 Rhode Island Ave NW, Washington, DC 20005</li>
              <li>1-202-232-7000</li>
              <li>
                <Link href="https://www.thedarcyhotel.com/">
                  <a>www.thedarcyhotel.com</a>
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <h3>Dine</h3>
        <p>DC has a number of great restaurants....</p>
      </InfoSection>
      <InfoSection id="story">
        <h2>Our Story</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          convallis rhoncus justo, ut sagittis leo iaculis vitae. Nulla sodales
          nibh eget sapien tincidunt, eget blandit tortor ullamcorper. Mauris
          nec neque vitae massa elementum rutrum. Sed iaculis tortor lobortis
          sapien cursus dapibus a quis ipsum. Nam id dui ultrices, porttitor
          sapien et, dictum nibh. Curabitur sit amet maximus sapien. In id
          vestibulum lacus. Donec sollicitudin augue purus, porttitor egestas
          dui tempor at. Praesent finibus maximus neque, et euismod tellus
          ultrices ullamcorper. Maecenas efficitur imperdiet tempus. Suspendisse
          pretium accumsan neque, nec fringilla nisl viverra non. Praesent id
          nulla id neque aliquam consequat in volutpat nisl. Sed eget est
          pretium metus lobortis pulvinar quis in arcu. Nunc vulputate dictum
          turpis vel porttitor. Pellentesque venenatis diam a arcu convallis,
          viverra pretium felis laoreet.
        </p>
      </InfoSection>
      <InfoSection>
        <h2 id="registry">Registry</h2>
        <p>
          We don't really need anything and don't have space for any more stuff,
          so instead of a traditional registry, we're encouraging our guests to
          donate to causes that we feel strongly about.
        </p>

        <Card>
          <CardThumbnail src="/images/citydogs.png" />
          <CardHeader>City Dogs Rescue</CardHeader>
          <CardBody>
            <Link href="https://www.citydogsrescuedc.org/donate.html">
              <a></a>
            </Link>
            <p>
              City Dogs Rescue is a DC animal rescue organization that rescues
              adoptable dogs and cats in overcrowded and high-kill shelters,
              where resources are severely limited.
            </p>
            <p>
              <Link href="/dogs">
                <a>All of our foster dogs</a>
              </Link>{" "}
              have come from City Dogs Rescue.
            </p>
            <p>
              When making your donation, you can select "This is a donation in
              honor of a person, event, or pet" so that we will get notified of
              the gift you've made.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardThumbnail src="/images/marchofdimes.png" />
          <CardHeader>March of Dimes</CardHeader>
          <CardBody>
            <Link href="https://www.marchofdimes.org/giving/support-general.aspx">
              <a></a>
            </Link>
            <p>
              March of Dimes leads the fight for the health of all moms and
              babies. They believe that every baby deserves the best possible
              start. Unfortunately, not all babies get one. They are changing
              that.
            </p>
            <p>
              When making your donation, you can select "Dedicate my donation:
              In honor of" so that we will get notified of the gift you've made.
            </p>
          </CardBody>
        </Card>

        {/* <DonateArea>
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
              City Dogs Rescue is a DC animal rescue organization that rescues
              adoptable dogs and cats in overcrowded and high-kill shelters,
              where resources are severely limited.
            </p>
            <p>All of our foster dogs have come from City Dogs Rescue.</p>
            <p>
              When making your donation, you can select "This is a donation in
              honor of a person, event, or pet" so that we will get notified of
              the gift you've made.
            </p>
          </DonateDescription>
          <Link href="https://www.marchofdimes.org/giving/support-general.aspx">
            <a>
              <DonateLink>
                <DonateIcon src="/images/marchofdimes.png" />
                March of Dimes
              </DonateLink>
            </a>
          </Link>
          <DonateDescription>
            <p>
              March of Dimes leads the fight for the health of all moms and
              babies. They believe that every baby deserves the best possible
              start. Unfortunately, not all babies get one. They are changing
              that.
            </p>
            <p>
              When making your donation, you can select "Dedicate my donation:
              In honor of" so that we will get notified of the gift you've made.
            </p>
          </DonateDescription>
        </DonateArea> */}
        <p>If you'd still like to make a monetary gift to us...</p>
      </InfoSection>
    </Layout>
  </>
);

export default IndexPage;
