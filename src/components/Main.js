import Home from "./Home";
import Histoire from "./Histoire";
import Menu from "./Menu";
import Contact from "./Contact";

const Main = (props) => {
  const { page } = props;
  return (
    <main>
      {page === "home" && <Home />}
      {page === "histoire" && <Histoire />}
      {page === "menu" && <Menu />}
      {page === "contact" && <Contact />}
    </main>
  );
};

export default Main;