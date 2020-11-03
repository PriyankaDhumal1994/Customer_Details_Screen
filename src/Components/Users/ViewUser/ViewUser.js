import React from "react";
import "./ViewUser.css";

const ViewUser = ({ viewUserData, closeUserHandler }) => {
  const viewData = Object.keys(viewUserData);
  const viewElement = viewData.map((db, index) => (
    <>
      {index !== viewData.length - 1 && (
        <div>
          <lable>{db.toUpperCase()}:</lable>
          <h6> {viewUserData[db]}</h6>
          {index !== viewData.length - 2 && <hr />}
        </div>
      )}
    </>
  ));
  return (
    <div className="viewUserWrapper">
      <div className="viewUserHeader">
        <p>Customer Details</p>
        <div onClick={() => closeUserHandler()}>
          <i class="fa fa-times fa-1x" aria-hidden="true"></i>
        </div>
      </div>
      <div className="viewContaner">
        <div className="viewImg">
          <img src={viewUserData.avatar} alt="customer" />
        </div>
        <div className="viewDetails">{viewElement}</div>
      </div>
    </div>
  );
};

export default ViewUser;
