import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import HeadingBar from "./components/HeadingBar";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import ItemContextProvier from "./contexts/ItemContextProvider";

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemContextProvier>
          <HeadingBar />
          <ItemList />
          <Sidebar />
        </ItemContextProvier>
      </main>
      <Footer />
    </>
  );
}
