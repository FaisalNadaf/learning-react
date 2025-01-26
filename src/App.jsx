import "./App.css";
import ProductTab from "./ProductTab";
import Cards from "./card/Cards";
import Comment from "./comment";
import Liked from "./likeBtn";
import LudoBoard from "./ludoBoard";
import Todolist from "./todaList_o1/todolist";

function App() {
  return (
    <>
      <Todolist />
      {/* <div className="flex h-full w-full "><Cards /></div> */}
      {/* <ProductTab/> */}
      {/* <LudoBoard/> */}
      {/* <Comment/> */}
    </>
  );
}

export default App;
