import { View } from "react-native";
import React from "react";
import tw from "../../constants/tailwind";
import { Text } from "../Themed";
import BackButton from "../Buttons/BackButton";

type Props = {
  title: string;
  backButton: boolean;
  textStyle?: string | any;
};

const ScreenHeader = ({ title, backButton, textStyle }: Props) => {
  return (
    <View style={tw`flex-row items-center justify-center py-3`}>
      {backButton && <BackButton />}
      <Text style={[textStyle, tw`text-xl font-bold`]}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
