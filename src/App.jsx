import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import HeadingBar from "./components/HeadingBar";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <HeadingBar />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
