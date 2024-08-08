import "./Addform.css";

export default function Addform(props) {
  const { title, setTitle, saveTask, editId } = props;
  return (
    <div className="form-containner" onSubmit={saveTask}>
      <h2>Add Tasks</h2>
      <form className="form-group">
        <input
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn-submitform" on>
        {editId? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
