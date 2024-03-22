import "./App.css";
import ProductTab from "./ProductTab";
import Cards from "./card/Cards";
import Comment from "./comment";
import Liked from "./likeBtn";
import LudoBoard from "./ludoBoard";

function App() {
  return (
    <>
      <div className="flex h-full w-full ">
      
        <Cards />
      </div>

      {/* <ProductTab/> */}
      {/* <LudoBoard/> */}
      {/* <Comment/> */}
    </>
  );
}

export default App;
