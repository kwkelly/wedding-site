import Layout from "../components/Layout";
import { useEffect } from "react";
import Link from "next/link";
import { InfoSection } from "../components/InfoSection";
import { Header } from "../components/Header";
import styled from "styled-components";
import { GlobalStyle } from "../components/GlobalStyles";
import { Donate } from "../components/Donate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getStaticProps() {
  return {
    props: {
      STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
      STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID,
      STRIPE_SUCCESS_URL: process.env.STRIPE_SUCCESS_URL,
      STRIPE_CANCEL_URL: process.env.STRIPE_CANCEL_URL,
    },
  };
}

const CardThumbnail = styled.img`
  max-width: 75px;
  max-height: 75px;
  grid-area: thumbnail;
  align-self: center;
  margin-right: 1rem;
`;

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

const roomBlockLink =
  "https://gc.synxis.com/rez.aspx?Hotel=9028&Chain=1003&arrive=10/15/2021&depart=10/17/2021&adult=1&child=0&group=211015CASS";

const isThankYouRedirect = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return !!params.get("thankyou");
};

type Props = {
  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_PRICE_ID: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
};

const IndexPage = (props: Props) => {
  useEffect(() => {
    isThankYouRedirect() &&
      toast("Thank you for your gift!", {
        onClose: () => window.history.replaceState({}, document.title, "/"),
      });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Header></Header>
      <Layout title="Elizabeth and Keith's Wedding">
        <InfoSection id="details">
          <h2>Event Details</h2>
          <p>
            The ceremony and reception will be held at{" "}
            <a href="https://fathomgallery.org">Fathom Gallery</a> on October,
            16 2021 at 4:30pm.
          </p>
          <p>
            Following the ceremony will be a reception catered by{" "}
            <Link href="https://www.timberpizza.com/">
              <a>Timber Pizza Company</a>
            </Link>
            .
          </p>

          <Card>
            <CardThumbnail src="/images/fathom.png" alt="Fathom logo" />
            <CardHeader>Fathom Gallery</CardHeader>
            <CardBody>
              <ul>
                <li>1333 14th St NW, Washington DC, 20005</li>
                <li>1-202-588-8111</li>
                <li>
                  <Link href="mailto:info@fathomgallery.org">
                    info@fathomgallery.org
                  </Link>
                </li>
                <li>
                  <Link href="https://www.fathomgallery.org">
                    <a>www.fathomgallery.org</a>
                  </Link>
                </li>
              </ul>
            </CardBody>
          </Card>
        </InfoSection>
        <InfoSection id="recommendations">
          <h2>Recommendations</h2>
          <h3>Stay</h3>
          Here are some options near Fathom Gallery, but please feel free to ask
          us for other recommendations as there are many other lodging options
          in the area.
          <Card>
            <CardThumbnail src="/images/viceroy.png" alt="Viceroy logo" />
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
                , a new and modern boutique hotel just steps away from the
                wedding venue.
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
            <CardThumbnail src="/images/darcy.png" alt="Darcy logo" />
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
          <p>
            DC has a number of great restaurants in the area of the venue. Here
            are some of our favorites:
          </p>
          <ul>
            <li>Churchkey - gastropub with a huge beer selection.</li>
            <li>
              Garden District - beer garden with barbecue. What more could you
              want?
            </li>
            <li>Pappe - delicious Indian food.</li>
            <li>Le Diplomate - famous for their brunch and their burger.</li>
            <li>Barcelona - tapas and wine bar.</li>
          </ul>
        </InfoSection>
        <InfoSection>
          <h2 id="registry">Registry</h2>
          <p>
            We so appreciate our friends and families traveling to celebrate
            with us on this joyous occasion. Your presence is the best gift we
            could hope to receive. Instead, we’d like to encourage you to donate
            to these causes that are very special to us and the local community.
            Further, we hope you can understand that we have everything we need
            and are limited by a small living space.
          </p>

          <Card>
            <CardThumbnail
              src="/images/maryscenter.png"
              alt="Mary's Center logo"
            />
            <CardHeader>Mary's Center</CardHeader>
            <CardBody>
              <p>
                Every day, hundreds of families in the Washington, DC region
                struggle to make ends meet. When illness hits, many of them will
                forgo a doctor’s visit because the cost of care might mean not
                being able to put food on the table or keep a roof over their
                heads. At Mary’s Center, we believe quality healthcare is not
                just a service. It’s a human right. That’s why we work hard to
                help move families out of poverty and ensure everyone has access
                to the best possible healthcare, education, and social
                services—regardless of their ability to pay.
              </p>
              <h4>
                <Link href="https://www.justgiving.com/fundraising/elizabethandkeith">
                  <a>Donate Here</a>
                </Link>
              </h4>
            </CardBody>
          </Card>

          <Card>
            <CardThumbnail
              src="/images/citydogs.png"
              alt="City Dogs Rescue logo"
            />
            <CardHeader>City Dogs Rescue</CardHeader>
            <CardBody>
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
                honor of a person, event, or pet" so that we will get notified
                of the gift you've made.
              </p>
              <h4>
                <Link href="https://www.citydogsrescuedc.org/donate.html">
                  <a>Donate Here</a>
                </Link>
              </h4>
            </CardBody>
          </Card>

          <p>
            If you'd still like to make a monetary gift to us feel free to make
            a contribution below.
          </p>
          <Card>
            <CardThumbnail
              src="/favicon-512x512.png"
              alt="E and K wedding logo"
            />
            <CardHeader>A gift for us!</CardHeader>
            <CardBody>
              Enter a gift amount and click Checkout. You'll be redirected to{" "}
              <Link href="https://stripe.com/">
                <a>Stripe</a>
              </Link>{" "}
              for payment processing.
              <Donate {...props} />
            </CardBody>
          </Card>
        </InfoSection>
      </Layout>
    </>
  );
};

export default IndexPage;
