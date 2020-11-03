import React from "react";

const UserCard = ({
  columnLayout,
  user,
  viewUserHander,
  addUpdateUserHandler,
  deleteCardHandler,
}) => {
  return (
    <div className={columnLayout}>
      <div className="card">
        <div className="card-header text-white">
          <div className="title">
            {user.first_name} {user.last_name}
          </div>
          <div className="icons">
            <i
              className="fa fa-eye"
              aria-hidden="true"
              onClick={() => viewUserHander(user)}
            ></i>
            <i
              className="fa fa-pencil-square-o"
              aria-hidden="true"
              onClick={() => addUpdateUserHandler(user)}
            ></i>
            <i
              className="fa fa-trash"
              onClick={() => deleteCardHandler(user)}
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="card-body" style={{ display: "flex" }}>
          <img className="card-img-left" src={user.avatar} alt="Card cap" />
          <div className="card-text ml-3" style={{ wordWrap: "break-word" }}>
            {user.first_name}
            {"-"}
            {user.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserCard);
