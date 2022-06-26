import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Text } from "../Themed";
import useColorScheme from "../../hooks/useColorScheme";
import tw from "../../constants/tailwind";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  inputStyle?: any;
  onShowPasswordPress?: any;
  passwordIcon?: boolean;
};

const TextField = ({
  placeholder,
  inputStyle,
  secureTextEntry,
  onShowPasswordPress,
  passwordIcon,
  ...resetProps
}: TextInputProps & Props) => {
  const colorScheme = useColorScheme();
  const placeholderTextColor: any = tw`text-gray-400`.color;

  return (
    <View
      style={[
        inputStyle,
        tw`${
          colorScheme === "light"
            ? "border-gray-200"
            : "border-white border-opacity-10"
        } border p-[16px] rounded-[16px] flex-row items-center`,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={tw`${
          colorScheme === "light" ? "text-gray-800" : "text-white"
        } text-base flex-1`}
        {...resetProps}
        secureTextEntry={secureTextEntry}
      />
      {secureTextEntry && passwordIcon && (
        <TouchableOpacity
          onPress={onShowPasswordPress}
          style={tw`absolute right-0 p-3`}
        >
          <AntDesign name="eyeo" color={placeholderTextColor} size={24} />
        </TouchableOpacity>
      )}
      {!secureTextEntry && passwordIcon && (
        <TouchableOpacity
          onPress={onShowPasswordPress}
          style={tw`absolute right-0 p-3`}
        >
          <AntDesign name="eye" color={placeholderTextColor} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextField;
