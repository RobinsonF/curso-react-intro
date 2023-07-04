import React from "react";
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText||'');

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  const onCancel = () => {
    navigate('/');
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md p-4 bg-white rounded shadow">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="text-lg font-bold">{props.label}</label>
          <textarea
            placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            className="p-2 border border-gray-300 rounded resize-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {props.submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { TodoForm };