import React from "react";
import "./UserCategoryGraph.css";
import Customer_Category from "../../../Database/Customer_Category.json";

const UserCategoryGragh = ({ categoryHandler, title }) => {
  const { public_customer, private_customer } = Customer_Category;
  console.log("inside graph", public_customer, private_customer);

  const folderHandler = (val) => {
    var toggler = document.getElementsByClassName(val);
    toggler[0].nextElementSibling.classList.toggle("active");
    toggler[0].classList.toggle("caret-down");
  };

  return (
    <div className="graph">
      <p style={{ margin: "15px 0px 0px 15px" }}>
        Customer Category: <strong>{title}</strong>
      </p>
      <hr />
      <ul id="myUL">
        <li>
          <span
            className="caret caret-public"
            onClick={() => folderHandler("caret-public")}
          >
            <i className="fa fa-folder-o" aria-hidden="true"></i> Public
          </span>
          <ul className="nested">
            {public_customer.map((db) => (
              <li>
                <i
                  className="fa fa-file-o" //{classes}
                  aria-hidden="true"
                  onClick={() => categoryHandler(db)}
                >
                  {" "}
                  {db.bank} {"-"}
                  {db.branch}
                </i>
              </li>
            ))}
          </ul>
          <li>
            <span
              className="caret caret-private"
              onClick={() => folderHandler("caret-private")}
            >
              <i className={"fa fa-folder-o"} aria-hidden="true"></i> Private
            </span>
            <ul className="nested">
              {private_customer.map((db) => (
                <li>
                  <i
                    className="fa fa-file-o"
                    aria-hidden="true"
                    onClick={() => categoryHandler(db)}
                  >
                    {" "}
                    {db.bank} {"-"}
                    {db.branch}
                  </i>
                </li>
              ))}
            </ul>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(UserCategoryGragh);
