import React from "react";

const DeleteUser = ({
  confirmedDeleteUserHandler,
  cancelledDeleteUserHandler,
}) => {
  return (
    <div className="deleteUser">
      <p>Are you sure to delete this user?</p>
      <button
        type="button"
        onClick={() => {
          confirmedDeleteUserHandler();
        }}
        className="mr-2 fbutton"
      >
        Delete
      </button>
      <button
        onClick={() => {
          cancelledDeleteUserHandler();
        }}
        type="button"
        className="lbutton"
      >
        Cancel
      </button>
    </div>
  );
};

export default React.memo(DeleteUser);
