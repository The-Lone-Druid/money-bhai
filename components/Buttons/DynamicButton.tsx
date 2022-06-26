import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../constants/tailwind";

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
  iconStyle
}: Props) => {
  const dynamicButtonStyles =
    type === "primary"
      ? [tw`bg-appViolet-100`]
      : type === "primary-light"
      ? [tw`bg-appViolet-100 bg-opacity-20`]
      : [];

  const dynamicTextStyles =
    type === "primary"
      ? [tw`text-white`]
      : type === "primary-light"
      ? [tw`text-appViolet-100`]
      : [];

  const dynamicIconStyles =
    type === "primary" ? [tw`text-white`] : type === "primary-light" ? [] : [];

  return (
    <TouchableOpacity
      style={[
        tw`flex-row p-[8px] rounded-[16px] h-[56px] items-center justify-center`,
        dynamicButtonStyles,
        buttonStyle
      ]}
    >
      {iconPos === "left" && imgIcon && (
        <Image
          source={require("../../assets/images/icons/flat-color-icons_google.svg")}
        />
      )}
      <Text style={[tw`font-medium text-[18px]`, dynamicTextStyles, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DynamicButton;
