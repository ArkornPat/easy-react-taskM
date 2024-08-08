import { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import "./Items.css"

export default function Items(props) {
  const{data,deleteTask, editTask} = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="itens-list">
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        className="checkbox"
      />
      <p className={`items-title ${isChecked ? 'checked' : ''}`}>{data.title}</p>
      <div className="btn-container">
        <FaRegEdit className="btn"onClick={()=>editTask(data.id)}/>
        <FaRegTrashCan className="btn" onClick={()=>deleteTask(data.id)}/>
      </div>
    </div>
  );
}
