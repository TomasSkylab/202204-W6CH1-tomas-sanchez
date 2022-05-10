import axios from "axios";
import {
  loadTasksActionCreator,
  removeTaskActionCreator,
} from "../features/taskSlice";

export const loadTasksThunk = () => async (dispatch) => {
  const { data: task } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadTasksActionCreator(task));
};

export const deleteTasksThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_APIURL}${id}`, {
    method: "delete",
  });
  if (response.ok) {
    dispatch(removeTaskActionCreator(id));
  }
};

export default loadTasksThunk;
