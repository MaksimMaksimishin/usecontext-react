import React, { useContext, useState } from "react";
import { UsersContext, removeUser, editUser } from "../context/users";

const Users = () => {
  const [users, dispatch] = useContext(UsersContext);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState('');

  const handleRemoveUser = (id) => {
    dispatch(removeUser({ id }));
  };

  const handleEditUser = (user) => {
    dispatch(editUser({
      id: user.id,
      title: editUserName || user.title,
    }));
    setEditUserId(null);
    setEditUserName('');
  };

  return (
    <div className="users">
      {users.map(user => (
        <div key={user.id} className="user">
          {editUserId === user.id ? (
            <>
              <input 
                type="text" 
                value={editUserName} 
                onChange={(e) => setEditUserName(e.target.value)} 
                placeholder="Введите имя пользователя"
              />
              <button onClick={() => handleEditUser(user)}>Сохранить</button>
            </>
          ) : (
            <>
              <h3 className="user__title">{user.title}</h3>
              <button onClick={() => setEditUserId(user.id)}>Редактировать</button>
              <button onClick={() => handleRemoveUser(user.id)}>Удалить</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;