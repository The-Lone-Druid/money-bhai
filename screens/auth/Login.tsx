import { ScrollView, TouchableOpacity, View } from "react-native";
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

const Login = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`p-3`}>
          <ScreenHeader title={"Login"} backButton={true} />
          <View style={tw`mt-10`}>
            <TextField
              placeholder="Email"
              inputStyle={tw``}
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
            <DynamicButton
              title={"Login"}
              type={"primary"}
              buttonStyle={tw`mt-8`}
            />
            <TouchableOpacity>
              <Text
                style={tw`font-bold text-center py-4 pt-6 text-violet-400 text-base`}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
            <Text style={tw`font-bold text-center text-gray-500 text-base`}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
