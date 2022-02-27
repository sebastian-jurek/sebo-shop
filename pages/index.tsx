import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-500">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img
          src="https://picsum.photos/id/1069/536/354"
          alt="Meduza w oceanie"
        />
        <p>
          Do you ever feel like a plastic bag Drifting through the wind Wanting
          to start again? Do you ever feel, feel so paper thin Like a house of
          cards One blow from caving in? Do you ever feel already buried deep?
          Six feet under screams, but no one seems to hear a thing Do you know
          that there's still a chance for you 'Cause there's a spark in you You
          just gotta ignite the light, and let it shine Just own the night like
          the 4th of July 'Cause, baby, you're a firework Come on, show 'em what
          you're worth Make 'em go, "Oh, oh, oh" As you shoot across the sky
          Baby, you're a firework Come on, let your colors burst Make 'em go,
          "Oh, oh, oh" You're gonna leave 'em all in awe, awe, awe
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

// NOTE: w folderze PAGES musimy korzystać z EXPORT DEFAULT
//ale w folderze COMPONENTS możemy korzystać z czego chcemy
