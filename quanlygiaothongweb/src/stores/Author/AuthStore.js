import { createStore, createHook } from "react-sweet-state";
import { toast } from "react-toastify";
import axios from "axios";
import {API_HOST} from 'config/config'

const initialState = {
  username: "",
  password: "",
  message: "",
  isLogin: false,
  accessToken: "",
  refreshToken:""
};

const actions = {
    login: (value) => async ({ setState }) => {
      const { username: user = "", password = "" } = value;
      try {
        const response = await axios({
          method: 'post',
          url: `${API_HOST}/api/v1/auth/login`,
          data: {
            user,
            password
          }
        });
        if(response?.data?.accessToken){
          toast.success("Login Success");
          setState({
            username: response?.data?.username,
            message: "SUCCESS",
            isLogin: true,
            refreshToken: response?.data?.refreshToken || "",
            accessToken: response?.data?.accessToken || ""
          });
        } else {
          toast.error("Login Failed");
        }
      } catch (error) {
        toast.error("Login Failed");
      }
    },
    logout: () => ({ setState }) => {
      toast.success("Logout Success");
      setState({
        username: "",
        password: "",
        message: "",
        isLogin: false,
      });
    },
    signup: (value) => async ({ setState }) => {
      console.log('value', value)
      try {
        const response = await axios({
          method: 'post',
          url: `${API_HOST}/api/v1/auth/register`,
          data: value
        });
        if(response?.data?.accessToken){
          toast.success("SignUp Success");
          setState({
            username: response?.data?.username,
            message: "SUCCESS",
            isLogin: true,
            refreshToken: response?.data?.refreshToken || "",
            accessToken: response?.data?.accessToken || ""
          });
        } else {
          toast.error("SignUp Failed");
        }
      } catch (error) {
        console.log({error})
        toast.error("SignUp Failed");
      }
    },
  },
  Store = createStore({
    initialState,
    actions,
  });

const useAuth = createHook(Store);

export default useAuth;
