import { BsCheckLg, BsCheckAll, BsXLg } from "react-icons/bs";
import './TodoItem.css';

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
}) {
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}
        onClick={onComplete}
      >
        {(completed) ? <BsCheckAll /> : <BsCheckLg />}
      </span>
      <p
        className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}
      >{text}</p>
      <span
        className='Icon Icon-delete'
        onClick={onDelete}
      ><BsXLg /></span>
    </li>
  );
}

export { TodoItem };