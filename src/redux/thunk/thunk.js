import axios from "axios";
import { loadTasksActionCreator } from "../features/taskSlice";

export const loadTasksThunk = () => async (dispatch) => {
  const { data: task } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadTasksActionCreator(task));
};

export default loadTasksThunk;
