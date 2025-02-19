import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../actions/userActions";
import { RootState } from "../store";

const useUser = () => {
  const { user, token } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch();

  const login = (data: any) => dispatch(loginAction(data));
  const logout = () => dispatch(logoutAction());

  return { user, token, login, logout };
};

export default useUser;
