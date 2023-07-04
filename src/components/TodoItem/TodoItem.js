import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { XCircleIcon } from '@heroicons/react/24/solid';


function TodoItem({ text, completed, onComplete, onDelete, onEdit }) {
  return (
    <li className="flex items-center justify-between bg-white shadow p-4 rounded mb-4">
      <div className='flex items-center space-x-2'>
        <CompleteIcon
          completed={completed}
          onComplete={onComplete}
          className="text-green-600 cursor-pointer hover:text-green-800 w-6 h-6"
        />
        <p className={`flex-1 ml-4 text-lg font-medium ${completed && "line-through text-gray-400"} px-10`}>
          {text}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <XCircleIcon
        className='text-red-600 cursor-pointer hover:text-red-800 w-9 h-9'
        onClick={()=>{
          onDelete();
        }}/>
        <EditIcon
          onEdit={onEdit}
        />
      </div>
    </li>
  );
}

export { TodoItem };