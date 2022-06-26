import {
  Alert,
  Image,
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

const PasswordEmailSent = (props: Props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={tw`p-3`}>
        <View style={tw`flex-row items-center justify-center mt-10`}>
          <Image
            source={require("../../assets/images/illustrations/mail-delivery.png")}
            resizeMode={"contain"}
            style={tw`w-[300px] h-[300px]`}
          />
        </View>
        <Text style={tw`text-center font-bold text-2xl`}>
          Your email is on the way
        </Text>
        <Text style={tw`text-center text-base mt-4`}>
          Check your email test@test.com and follow the instructions to reset
          your password
        </Text>
        <DynamicButton
          title={"Back to Login"}
          type={"primary"}
          onPress={() => {
            navigation.navigate("Login");
          }}
          buttonStyle={tw`mt-10`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordEmailSent;
