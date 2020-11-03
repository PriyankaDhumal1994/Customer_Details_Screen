import React, { useState, useEffect, useCallback, useReducer } from "react";
import UserCards from "../Users/UserCards";
import Pagination from "../Users/Pagination";
import UserToolbar from "../Users/UserToolbar";
import AddUserWrapper from "../Users/AddUser/AddUserWrapper";
import DeleteUser from "../Users/DeleteUser";
import Spinner from "../UI/Spinner";
import Backdrop from "../UI/Backdrop";
import ViewUser from "../Users/ViewUser/ViewUser";
import { makeRequest } from "../../API_Https/makeRequest";
import { API_PATHS } from "../../API_Https/API_Paths";

const httpsReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: false };
    case "RESPONSE":
      return { ...state, loading: false };
    case "ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};

const classes = ["overlay"];

const UserInfoContainer = () => {
  const [httpState, dispatch] = useReducer(httpsReducer, {
    loading: false,
    error: false,
  });
  const [userPosts, setUserPosts] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [isViewUser, setViewUser] = useState(false);
  const [viewUserData, setViewUserData] = useState(null);
  const [updateUserData, setUpdateUserData] = useState(null);
  const [deleteCard, setDeleteCard] = useState(false);
  const [deleteUserData, setDeleteUserData] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [isListView, setListView] = useState(false);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: "SEND" });
      const path = API_PATHS.USER_GET_REQ + "page=1";
      const response = await makeRequest("GET", path);
      console.log("API call response:", response);
      dispatch({ type: "RESPONSE" });
      setUserPosts(response.data.data);
      setTotalPage(response.data.total_pages);
    };
    fetchUser();
  }, []);

  const pageHandler = useCallback((e, pageNumber) => {
    setActivePage(pageNumber);
    e.preventDefault();
    const fetchUser = async () => {
      dispatch({ type: "SEND" });
      const path = API_PATHS.USER_GET_REQ + `page=${pageNumber}`;
      const response = await makeRequest("GET", path);
      console.log("API call response:", response);
      dispatch({ type: "RESPONSE" });
      setUserPosts(response.data.data);
    };
    fetchUser();
  }, []);

  const viewUserHander = useCallback((user) => {
    setViewUser(true);
    setViewUserData(user);
    classes.push("overlayView");
  }, []);

  const addUpdateUserHandler = useCallback((user) => {
    setAddUser(true);
    classes.push("overlayView");
    if (user) setUpdateUserData(user);
    else setUpdateUserData(null);
  }, []);

  const submitAddedUserData = useCallback(
    (userEnteredData) => {
      dispatch({ type: "SEND" });
      let path = API_PATHS.USER_POST_REQ;
      if (updateUserData && updateUserData.id > 0) {
        path = path + `/${updateUserData.id}`;
      }
      let response = makeRequest("POST", path, userEnteredData);
      console.log("API call response:", response);
      setAddUser(false);
      setUpdateUserData(null);
      dispatch({ type: "RESPONSE" });
      classes.pop();
    },
    [updateUserData]
  );

  const closeUserHandler = useCallback(() => {
    setAddUser(false);
    setViewUser(false);
    classes.splice(1, 1);
  }, []);

  const deleteCardHandler = useCallback((user) => {
    setDeleteCard(true);
    setDeleteUserData(user);
    console.log("delete handler", user);
    classes.push("overlayView");
  }, []);

  const confirmedDeleteUserHandler = useCallback(() => {
    dispatch({ type: "SEND" });
    console.log("delete confirm", deleteUserData);
    const path = API_PATHS.USER_DEL_REQ + `${deleteUserData.id}`;
    const response = makeRequest("DELETE", path);
    console.log("API call response:", response);
    dispatch({ type: "RESPONSE" });
    setDeleteCard(false);
    setDeleteUserData(null);
    classes.pop();
  }, [deleteUserData]);

  const cancelledDeleteUserHandler = useCallback(() => {
    setDeleteCard(false);
    classes.pop();
  }, []);

  const listHandler = useCallback(() => {
    setListView(true);
  }, []);

  const cardHandler = useCallback(() => {
    setListView(false);
  }, []);

  const overlayHandler = useCallback(() => {
    classes.pop();
    setAddUser(false);
    setViewUser(false);
    setDeleteCard(false);
  }, []);

  return (
    <div className="main-container">
      <Backdrop classes={classes.join(" ")} overlayHandler={overlayHandler} />
      {deleteCard ? (
        <DeleteUser
          confirmedDeleteUserHandler={confirmedDeleteUserHandler}
          cancelledDeleteUserHandler={cancelledDeleteUserHandler}
        />
      ) : null}
      {addUser ? (
        <AddUserWrapper
          closeUserHandler={closeUserHandler}
          submitAddedUserData={submitAddedUserData}
          updateUserData={updateUserData}
        />
      ) : null}
      {isViewUser && (
        <ViewUser
          viewUserData={viewUserData}
          closeUserHandler={closeUserHandler}
        />
      )}
      <UserToolbar
        addUpdateUserHandler={addUpdateUserHandler}
        listHandler={listHandler}
        cardHandler={cardHandler}
      />
      {httpState.loading ? (
        <Spinner />
      ) : (
        <UserCards
          isListView={isListView}
          userData={userPosts}
          deleteCardHandler={deleteCardHandler}
          addUpdateUserHandler={addUpdateUserHandler}
          viewUserHander={viewUserHander}
        />
      )}
      <Pagination
        activePage={activePage}
        totalPosts={totalPage}
        pageHandler={pageHandler}
      />
    </div>
  );
};

export default UserInfoContainer;
