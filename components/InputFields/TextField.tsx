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
  onError?: string | any;
};

const TextField = ({
  placeholder,
  inputStyle,
  secureTextEntry,
  onShowPasswordPress,
  passwordIcon,
  onError,
  ...resetProps
}: TextInputProps & Props) => {
  const colorScheme = useColorScheme();
  const placeholderTextColor: any = tw`text-gray-400`.color;

  return (
    <View>
      <View
        style={[
          inputStyle,
          tw`${
            colorScheme === "light"
              ? "border-gray-200"
              : "border-white border-opacity-10"
          } border rounded-[16px] flex-row items-center ${
            onError && "border-red-500 border-opacity-50"
          }`,
        ]}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={tw`${
            colorScheme === "light" ? "text-gray-800" : "text-white"
          } text-base font-semibold flex-1 android:p-[16px] ios:pt-[14px] ios:pb-[21px] ios:px-[16px]`}
          {...resetProps}
          secureTextEntry={secureTextEntry}
        />
        {secureTextEntry && passwordIcon && (
          <TouchableOpacity onPress={onShowPasswordPress} style={tw`p-3`}>
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
      {onError && <Text style={tw`text-red-500 pl-2 pt-1`}>{onError}</Text>}
    </View>
  );
};

export default TextField;
