import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "../../constants/tailwind";
import { SvgXml } from "react-native-svg";

type Props = {
  source: any;
};

const ImgIcon = ({ source }: Props) => {
  return (
    <TouchableOpacity style={tw`p-1`}>
      <SvgXml xml={source} />
    </TouchableOpacity>
  );
};

export default ImgIcon;

const styles = StyleSheet.create({});
