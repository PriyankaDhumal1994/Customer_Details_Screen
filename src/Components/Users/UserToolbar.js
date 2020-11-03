import React from "react";

const UserToolbar = ({ addUpdateUserHandler, listHandler, cardHandler }) => {
  return (
    <div className="userToolbar">
      <p>
        <i class="fa fa-user fa-2x" aria-hidden="true"></i> Customers
      </p>
      <div style={{ display: "flex" }}>
        <p onClick={() => cardHandler()}>
          <i class="fa fa-th-large" aria-hidden="true">
            {" "}
            Card view
          </i>
        </p>
        <p onClick={() => listHandler()}>
          <i class="fa fa-bars" aria-hidden="true">
            {" "}
            List view
          </i>
        </p>
        <p onClick={() => addUpdateUserHandler()}>
          <i class="fa fa-plus" aria-hidden="true">
            {" "}
            Add Customer
          </i>
        </p>
      </div>
    </div>
  );
};

export default React.memo(UserToolbar);
