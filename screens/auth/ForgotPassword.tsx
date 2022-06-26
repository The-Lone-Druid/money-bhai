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

const ForgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

const ForgotPassword = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <ScreenHeader title={"Forgot Password"} backButton={true} />
          <ScrollView>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPasswordValidationSchema}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  Alert.alert(JSON.stringify(values));
                  formikActions.setSubmitting(false);
                  navigation.navigate("PasswordEmailSent");
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
                  <Text style={tw`text-2xl font-bold px-2 mt-10`}>
                    Don't worry. Enter your email and we'll send you a link to
                    reset your password.
                  </Text>
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
                    <DynamicButton
                      title={"Continue"}
                      type={"primary"}
                      buttonStyle={tw`mt-8`}
                      onPress={handleSubmit}
                    />
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

export default ForgotPassword;
