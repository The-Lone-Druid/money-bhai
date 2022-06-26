import { Constants } from "expo-constants";
// Base urls
export const userManagementBaseUrl = process.env.USER_MANAGEMENT_BASE_URL;

export const userManagement = {
  loginController: {
    login: "login",
    logout: "logout",
    ssoLogin: "ssologin"
  },
  userController: {
    addUser: "users/add"
  }
};
