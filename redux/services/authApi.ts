import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userManagement, userManagementBaseUrl } from "./endpoints";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: userManagementBaseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: userManagement.loginController.login,
          method: "POST",
          body: body
        };
      }
    }),
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: userManagement.userController.addUser,
          method: "POST",
          body: body
        };
      }
    }),
    logoutUser: builder.query({
      query: () => userManagement.loginController.logout
    }),
    ssoLoginUser: builder.mutation({
      query: (body) => {
        return {
          url: userManagement.loginController.ssoLogin,
          method: "POST",
          body: body
        };
      }
    })
  })
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useSsoLoginUserMutation
} = authApi;
