import React from "react";

const UserInputFields = ({
  changeHandler,
  fname,
  lname,
  number,
  address,
  email,
}) => {
  return (
    <div className="add-fields" value="pqr">
      <input
        onChange={changeHandler}
        type="text"
        name="fname"
        placeholder="first name"
        value={fname}
      />
      <input
        onChange={changeHandler}
        name="lname"
        type="text"
        placeholder="last name"
        value={lname}
      />
      <input
        onChange={changeHandler}
        name="email"
        type="email"
        placeholder="email"
        value={email}
      />
      <input
        onChange={changeHandler}
        type="number"
        name="number"
        placeholder="phone number"
        value={number}
      />
      <input
        onChange={changeHandler}
        name="address"
        type="text"
        placeholder="address"
        value={address}
      />
    </div>
  );
};

export default React.memo(UserInputFields);
