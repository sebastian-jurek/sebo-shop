import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProductDetails } from "../components/Product";

const DATA = {
  description: `Do you ever feel like a plastic bag Drifting through the wind Wanting
  to start again Do you ever feel, feel so paper thin Like a house of
  cards One blow from caving in? Do you ever feel already buried deep?
  Six feet under screams, but no one seems to hear a thing Do you know
  that there's still a chance for you 'Cause there's a spark in you You
  just gotta ignite the light, and let it shine Just own the night like
  the 4th of July`,
  thumbnailUrl: `https://picsum.photos/id/1069/536/354`,
  thumbnailAlt: `Meduza w oceanie`,
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <div>EMPTY</div>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

// NOTE: w folderze PAGES musimy korzystać z EXPORT DEFAULT
//ale w folderze COMPONENTS możemy korzystać z czego chcemy
