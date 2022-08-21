import axios from "axios";

const getUser = async (userId, dispatch) => {
  console.log(userId, dispatch);
  try {
    const response = await axios.get(`/api/users/${userId}`);
    dispatch({
      type: "GET_USER",
      payload: response.data.user,
    });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (userData, dispatch, token) => {
  try {
    const response = await axios.post(
      `/api/users/edit`,
      { userData },
      { headers: { authorization: token } }
    );
    dispatch({
      type: "EDIT_USER",
      payload: response.data.user,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getUser, editUser };
