import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import "./Items.css"

export default function Items(props) {
  const{data,deleteTask, editTask} = props;
  return (
    <div className="itens-list">
      <p className="items-title">{data.title}</p>
      <div className="btn-container">
        <FaRegEdit className="btn"onClick={()=>editTask(data.id)}/>
        <FaRegTrashCan className="btn" onClick={()=>deleteTask(data.id)}/>
      </div>
    </div>
  );
}
