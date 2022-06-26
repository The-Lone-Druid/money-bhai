import { ScrollView, View } from "react-native";
import React from "react";
import { Text } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import tw from "../../constants/tailwind";
import TextField from "../../components/InputFields/TextField";
import Checkbox from "expo-checkbox";
import DynamicButton from "../../components/Buttons/DynamicButton";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const SignUp = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`p-3`}>
          <ScreenHeader title={"Sign Up"} backButton={true} />
          <View style={tw`mt-10`}>
            <TextField
              placeholder="Name"
              keyboardType="default"
              inputStyle={tw``}
            />
            <TextField
              placeholder="Email"
              inputStyle={tw`mt-5`}
              keyboardType="email-address"
            />
            <TextField
              placeholder="Password"
              secureTextEntry={passwordVisible}
              inputStyle={tw`mt-5`}
              onShowPasswordPress={() => {
                setPasswordVisible(!passwordVisible);
              }}
              passwordIcon={true}
            />
            <View style={tw`p-2 mt-3 flex-row items-center`}>
              <Checkbox
                style={tw`mr-2 border-violet-400`}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? `${tw`text-violet-500`.color}` : undefined}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
