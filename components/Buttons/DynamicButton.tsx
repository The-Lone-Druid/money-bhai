import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../constants/tailwind";
import useColorScheme from "../../hooks/useColorScheme";

type Props = {
  title: string | any;
  type: "primary" | "primary-light" | "primary-classic";
  icon?: string | null;
  imgIcon?: any | null;
  iconPos?: "left" | "right";
  pill?: boolean;
  buttonStyle?: any;
  textStyle?: any;
  iconStyle?: any;
  onPress?: () => void;
};

const DynamicButton = ({
  title,
  type,
  icon,
  imgIcon,
  iconPos,
  pill,
  buttonStyle,
  textStyle,
  iconStyle,
  onPress,
}: Props) => {
  const colorScheme = useColorScheme();

  const dynamicButtonStyles =
    type === "primary"
      ? [tw`bg-appViolet-100`]
      : type === "primary-light"
      ? [tw`bg-appViolet-100 bg-opacity-20`]
      : [tw`border border-gray-400`];

  const dynamicTextStyles =
    type === "primary"
      ? [tw`text-white`]
      : type === "primary-light"
      ? [tw`text-appViolet-100`]
      : [tw`${colorScheme === "light" ? "text-black" : "text-white"}`];

  const dynamicIconStyles =
    type === "primary" ? [tw`text-white`] : type === "primary-light" ? [] : [];

  return (
    <TouchableOpacity
      style={[
        tw`flex-row p-[8px] rounded-[16px] h-[56px] items-center justify-center`,
        dynamicButtonStyles,
        buttonStyle,
      ]}
      onPress={onPress}
    >
      {iconPos === "left" && imgIcon && (
        <Image
          source={imgIcon}
          style={[iconStyle, tw`h-[32px] w-[32px]`]}
          resizeMode={"contain"}
        />
      )}
      <Text style={[tw`font-medium text-[18px]`, dynamicTextStyles, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DynamicButton;
