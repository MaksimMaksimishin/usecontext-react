import React, { useContext, useState } from "react";
import { UsersContext, addUser } from "../context/users";

const AddUser = () => {
  const [users, dispatch] = useContext(UsersContext);
  const [newUser, setNewUser] = useState('');

  const clickHandler = () => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;

    dispatch(addUser({
      id,
      title: newUser || `Пользователь ${id}`,
    }));
    setNewUser('');
  }

  return (
    <div>
      <input 
        type="text" 
        value={newUser} 
        onChange={(e) => setNewUser(e.target.value)} 
        placeholder="Введите имя пользователя"
      />
      <button onClick={clickHandler}>Добавить пользователя</button>
    </div>
  );
};

export default AddUser;