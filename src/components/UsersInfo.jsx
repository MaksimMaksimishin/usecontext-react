import React, { useContext } from "react";
import { UsersContext } from "../context/users";

const UsersInfo = () => {
  const [users] = useContext(UsersContext);

  return (
    <h4>
      Количество пользователей: {users.length}
    </h4>
  );
};

export default UsersInfo;