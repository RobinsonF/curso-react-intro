import './TodoItem.css';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon
      completed={completed}
      onComplete={onComplete}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon
      onDelete={onDelete}
      />
    </li>
  );
}

export { TodoItem };