import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-500">
      <Header />
      <main className="flex-grow w-full max-w-md mx-auto">
        Właściwa zawartość
      </main>
      <Footer />
    </div>
  );
};

export default Home;

// NOTE: w folderze PAGES musimy korzystać z EXPORT DEFAULT
//ale w folderze COMPONENTS możemy korzystać z czego chcemy
