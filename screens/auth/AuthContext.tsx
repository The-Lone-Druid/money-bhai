import { StyleSheet } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authData } from "../../redux/slices/authSlice";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(authData);
  const [splashLoading, setSplashLoading] = useState(true);

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userData: any = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);

      if (userData) {
        // Add the user
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      setSplashLoading(true);

      AsyncStorage.removeItem("userData");
      // remove the data from store

      setSplashLoading(false);
    } catch {
      setSplashLoading(false);
      console.log("Error while logging out");
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  useEffect(() => {
    // login api call here
  }, []);

  return (
    <AuthContext.Provider value={{ userData, splashLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const styles = StyleSheet.create({});
