import Todo from "./UI/todo";

const DUMMY = localStorage.getItem("DUMMY")
  ? JSON.parse(localStorage.getItem("DUMMY"))
  : [];
let count = 0;
const addTodoHandler = (item) => {
  count++;
  const id = "t" + count;
  DUMMY.push({
    id: id,
    title: item,
    isComplete: false,
  });
  localStorage.setItem("DUMMY", JSON.stringify(DUMMY));
};
const ChangeStatusHandler = (id) => {
  const toChange = DUMMY.find((item) => item.id === id);
  toChange.isComplete = !toChange.isComplete;
  // console.log(DUMMY);
  localStorage.setItem("DUMMY", JSON.stringify(DUMMY));
};

function App() {
  return (
    <div className="App">
      <Todo
        todos={DUMMY}
        add={addTodoHandler}
        changeStatus={ChangeStatusHandler}
      />
    </div>
  );
}

export default App;
