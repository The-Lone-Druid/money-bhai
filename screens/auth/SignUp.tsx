import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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

const SignupValidationSchema = Yup.object({
  name: Yup.string().min(6).required("Please enter your full name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Please enter a valid password")
    .required("Password is required"),
});

const SignUp = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <ScreenHeader title={"Sign Up"} backButton={true} />
          <ScrollView>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={SignupValidationSchema}
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
                <View style={tw`p-3 pb-30`}>
                  <View style={tw`mt-10`}>
                    <TextField
                      placeholder="Name"
                      keyboardType="default"
                      inputStyle={tw``}
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      onError={touched.name && errors.name && errors.name}
                    />
                    <TextField
                      placeholder="Email"
                      inputStyle={tw`mt-5`}
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
                    <View style={tw`p-2 mt-3 flex-row items-center`}>
                      <Checkbox
                        style={tw`mr-2 border-violet-400`}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={
                          isChecked ? `${tw`text-violet-500`.color}` : undefined
                        }
                      />
                      <Text style={tw`ml-2 flex-row items-center`}>
                        By signing up, you agree to the{" "}
                        <Text style={tw`text-violet-500`}>
                          Terms of Service and Privacy Policy
                        </Text>
                      </Text>
                    </View>
                    <DynamicButton
                      title={"Sign Up"}
                      type={"primary"}
                      buttonStyle={tw`mt-4`}
                      onPress={handleSubmit}
                    />
                    <Text style={tw`font-bold text-center py-4 text-gray-500`}>
                      Or with
                    </Text>
                    <DynamicButton
                      title={"Sign Up with Google"}
                      type={"primary-classic"}
                      buttonStyle={tw``}
                      imgIcon={require("../../assets/images/icons/google-icon.png")}
                      iconPos={"left"}
                      iconStyle={tw`mr-2`}
                    />
                    <Text
                      style={tw`font-bold text-center py-4 text-gray-500 text-base`}
                    >
                      Already have an account?{" "}
                      <Text
                        style={tw`text-violet-400 underline`}
                        onPress={() => {
                          navigation.navigate("Login");
                        }}
                      >
                        Login
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

export default SignUp;
