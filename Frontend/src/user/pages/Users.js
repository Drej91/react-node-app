import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Andrej",
      image:
        "https://www.nicepng.com/png/full/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
