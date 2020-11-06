import React from "react";

export const AddUserLazyLoad = React.lazy(() =>
  import("../Users/AddUser/AddUserWrapper")
);
