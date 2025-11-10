import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;






// import React, { useState } from "react";

// function TodoList() {
//   const [todoItem, setTodoItem] = useState("");
//   const [todoList, setTodoList] = useState([]);

//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState(null); // { id, text }
//   const [editedText, setEditedText] = useState("");

//   const addTodoItem = () => {
//     if (todoItem.trim() === "") return;
//     const newItem = {
//       id: todoList.length + 1,
//       text: todoItem,
//       complete: false
//     }
//     setTodoList([...todoList, newItem])
//     setTodoItem("")
//   }

//   const deleteItem = (id) => {
//     setTodoList(todoList.filter((e) => e.id !== id))
//   }

//   const handleToggleComplete = (id) => {
//     const updatedList = todoList.map(item =>
//       item.id == id ? { ...item, complete: !item.complete } : item
//     )
//     setTodoList(updatedList)
//   }

//  const openEditModal = (item) => {
//     setEditingItem(item);
//     setEditedText(item.text);
//     setIsEditModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsEditModalOpen(false);
//     setEditingItem(null);
//     setEditedText("");
//   };

//   const saveEdit = () => {
//     const updatedList = todoList.map((item) =>
//       item.id === editingItem.id ? { ...item, text: editedText } : item
//     );
//     setTodoList(updatedList);
//     closeModal();
//   };

//   return (
//     <div>
//       <div className="mainInput">
//         <input placeholder={"Enter Todo"} value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
//         <button onClick={addTodoItem}>Add</button>
//       </div>
//       <ul>
//         {todoList.map((e) => (
//           <div className="listItem">
//             <li><input type={'checkbox'} checked={e.complete} onChange={() => handleToggleComplete(e.id)} /> <span className={e.complete ? "completed" : ""}> {e.text} </span>
//               <button onClick={() => deleteItem(e.id)}>Delete</button>
//               <button onClick={() => openEditModal(e)}>Edit</button>
//             </li>
//           </div>
//         )
//         )}
//       </ul>

//       {isEditModalOpen && (
//         <div className="modalOverlay">
//           <div className="modalContent">
//             <h3>Edit Todo</h3>
//             <input
//               value={editedText}
//               onChange={(e) => setEditedText(e.target.value)}
//             />
//             <div className="modalButtons">
//               <button onClick={saveEdit}>Save</button>
//               <button onClick={closeModal}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TodoList;

// body {
//   font-family: sans-serif;
//   -webkit-font-smoothing: auto;
//   -moz-font-smoothing: auto;
//   -moz-osx-font-smoothing: grayscale;
//   font-smoothing: auto;
//   text-rendering: optimizeLegibility;
//   font-smooth: always;
//   -webkit-tap-highlight-color: transparent;
//   -webkit-touch-callout: none;
// }

// h1 {
//   font-size: 1.5rem;
// }

// .mainInput {
//   display: flex;
//   gap: 5px;
// }

// .listItem {
//   display: flex;
//   gap: 5px;
 
// }

// .completed{
//   text-decoration: line-through;
// }

// .modalOverlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .modalContent {
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   min-width: 300px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
// }

// .modalButtons {
//   margin-top: 10px;
//   display: flex;
//   gap: 10px;
// }