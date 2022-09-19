import { useState } from "react";
import "./card.css";
function Card(props) {
  const id = props.id;
  const [TaskComplete, SetTaskComplete] = useState(props.isComplete);
  const onclickHandler = () => {
    props.changeCompletion(id);
    SetTaskComplete(!TaskComplete);
  };

  return (
    <div className="card" onClick={onclickHandler}>
      {TaskComplete && <del>{props.title}</del>}
      {!TaskComplete && props.title}
    </div>
  );
}

export default Card;
