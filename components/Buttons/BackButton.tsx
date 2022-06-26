import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../constants/tailwind";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const BackButton = (props: Props) => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={tw`absolute left-0 p-3 rounded-full`}
    >
      <AntDesign
        name="arrowleft"
        color={colorScheme === "light" ? Colors.light.text : Colors.dark.text}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
