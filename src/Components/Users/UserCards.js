import React from "react";
import UserCard from "./UserCard";

const UserCards = (props) => {
  const columnLayout = props.isListView
    ? "col-sm-12 mb-4 mt-1"
    : "col-sm-3 mb-4 mt-1 c1";
  return (
    <div class="row user-cards">
      {props.userData.map((user) => (
        <UserCard
          user={user}
          columnLayout={columnLayout}
          viewUserHander={props.viewUserHander}
          addUpdateUserHandler={props.addUpdateUserHandler}
          deleteCardHandler={props.deleteCardHandler}
        />
      ))}
    </div>
  );
};

export default React.memo(UserCards);
