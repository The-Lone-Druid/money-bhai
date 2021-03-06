import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Text } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import tw from "../../constants/tailwind";
import TextField from "../../components/InputFields/TextField";
import Checkbox from "expo-checkbox";
import DynamicButton from "../../components/Buttons/DynamicButton";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

type Props = {};

const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Please enter a valid password")
    .required("Password is required"),
});

const Login = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <ScreenHeader title={"Login"} backButton={true} />
          <ScrollView>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginValidationSchema}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  Alert.alert(JSON.stringify(values));
                  formikActions.setSubmitting(false);
                }, 500);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={tw`p-3 pb-50`}>
                  <View style={tw`mt-10`}>
                    <TextField
                      placeholder="Email"
                      inputStyle={tw``}
                      keyboardType="email-address"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      onError={touched.email && errors.email && errors.email}
                    />
                    <TextField
                      placeholder="Password"
                      secureTextEntry={passwordVisible}
                      inputStyle={tw`mt-5`}
                      onShowPasswordPress={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                      passwordIcon={true}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      onError={
                        touched.password && errors.password && errors.password
                      }
                    />
                    <DynamicButton
                      title={"Login"}
                      type={"primary"}
                      buttonStyle={tw`mt-8`}
                      onPress={handleSubmit}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("ForgotPassword");
                      }}
                    >
                      <Text
                        style={tw`font-bold text-center py-4 pt-6 text-violet-400 text-base`}
                      >
                        Forgot password?
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={tw`font-bold text-center text-gray-500 text-base`}
                    >
                      Don't have an account yet?{" "}
                      <Text
                        style={tw`text-violet-400 underline`}
                        onPress={() => {
                          navigation.navigate("SignUp");
                        }}
                      >
                        Sign Up
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
