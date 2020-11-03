import React, { useCallback, useState } from "react";
import UserCategoryGraph from "./UserCategoryGraph";
import UserInputFields from "./UserInputFields";

const AddUserWrapper = ({
  closeUserHandler,
  submitAddedUserData,
  updateUserData,
}) => {
  let f_name =
    updateUserData && updateUserData.first_name
      ? updateUserData.first_name
      : "";
  let l_name =
    updateUserData && updateUserData.last_name ? updateUserData.last_name : "";
  let mail = updateUserData && updateUserData.email ? updateUserData.email : "";
  let title = updateUserData ? "Update Customer" : "Add New Customer";

  const [fname, setFname] = useState(f_name);
  const [lname, setLname] = useState(l_name);
  const [email, setEmail] = useState(mail);
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");

  const changeHandler = useCallback((e) => {
    if (e.target.name === "fname") {
      setFname(e.target.value);
    } else if (e.target.name === "lname") {
      setLname(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "number") {
      setNumber(e.target.value);
    } else {
      setAddress(e.target.value);
    }
    console.log("input element", e.target.value);
  }, []);

  const categoryHandler = useCallback((category) => {
    console.log("graph handler", category);
    setCategoryTitle(category);
  }, []);

  let userEnteredData = {
    first_name: fname,
    last_name: lname,
    email: email,
    phone_number: number,
    address: address,
    category: categoryTitle.type + "-" + categoryTitle.bank,
  };
  return (
    <div className="addUserWrapper">
      <div className="addUserHeader">
        <p>{title} </p>
        <div onClick={() => closeUserHandler()}>
          <i class="fa fa-times fa-1x" aria-hidden="true"></i>
        </div>
      </div>
      <form
        className="add-user-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted!", e.target.values);
        }}
      >
        <UserCategoryGraph
          title={
            categoryTitle ? categoryTitle.type + "-" + categoryTitle.bank : ""
          }
          categoryHandler={categoryHandler}
        />
        <UserInputFields
          fname={fname}
          lname={lname}
          address={address}
          number={number}
          email={email}
          changeHandler={changeHandler}
        />
        <button
          className="btn form-button"
          style={{
            backgroundColor: "#107dac",
            color: "white",
            fontSize: "1.2rem",
          }}
          onClick={() => submitAddedUserData(userEnteredData)}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default React.memo(AddUserWrapper);
