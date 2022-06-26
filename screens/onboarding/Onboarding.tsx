import { Image, ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../constants/tailwind";
import Onboarding, { DotProps } from "react-native-onboarding-swiper";
import { Text } from "../../components/Themed";
import DynamicButton from "../../components/Buttons/DynamicButton";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const OnboardingUI: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Onboarding
        pages={[
          {
            backgroundColor: "transparent",
            image: <OnboardingOne />,
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "transparent",
            image: <OnboardingTwo />,
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "transparent",
            image: <OnboardingThree />,
            title: "",
            subtitle: "",
          },
        ]}
        showDone={false}
        showSkip={false}
        showNext={false}
        showPagination={true}
        bottomBarHeight={30}
        bottomBarHighlight={false}
        DotComponent={DotComponent}
      />
      <View style={tw`p-3`}>
        <DynamicButton
          type={"primary"}
          title={"Sign Up"}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
        <DynamicButton
          type={"primary-light"}
          title={"Login"}
          buttonStyle={tw`mt-3`}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingUI;

const DotComponent: React.FC<DotProps> = ({ selected }) => {
  return (
    <View
      style={tw`${
        selected
          ? "bg-appViolet-100 h-5 w-5"
          : "bg-gray-500 bg-opacity-20 h-2 w-2"
      } rounded-full mx-2`}
    ></View>
  );
};

const OnboardingOne = () => {
  return (
    <ScrollView>
      <View style={tw`flex-row justify-center items-center`}>
        <Image
          source={require("../../assets/images/illustrations/gain-money-control.png")}
          resizeMode={"contain"}
          style={tw`h-[300px] w-[300px]`}
        />
      </View>
      <View style={tw`p-3`}>
        <Text style={tw`font-bold text-3xl text-center`}>
          Gain total control of your money
        </Text>
        <Text style={tw`text-gray-500 text-center mt-3 text-base`}>
          Become your own money manager and make every cent count
        </Text>
      </View>
    </ScrollView>
  );
};

const OnboardingTwo = () => {
  return (
    <ScrollView>
      <View style={tw`flex-row justify-center items-center`}>
        <Image
          source={require("../../assets/images/illustrations/know-your-expenses.png")}
          resizeMode={"contain"}
          style={tw`h-[300px] w-[300px]`}
        />
      </View>
      <View style={tw`p-3`}>
        <Text style={tw`font-bold text-3xl text-center`}>
          Know where your money goes
        </Text>
        <Text style={tw`text-gray-500 text-center mt-3 text-base`}>
          Track your transaction easily, with categories and financial report
        </Text>
      </View>
    </ScrollView>
  );
};

const OnboardingThree = () => {
  return (
    <ScrollView>
      <View style={tw`flex-row justify-center items-center`}>
        <Image
          source={require("../../assets/images/illustrations/planning-ahead.png")}
          resizeMode={"contain"}
          style={tw`h-[300px] w-[300px]`}
        />
      </View>
      <View style={tw`p-3`}>
        <Text style={tw`font-bold text-3xl text-center`}>Planning ahead</Text>
        <Text style={tw`text-gray-500 text-center mt-3 text-base`}>
          Setup your budget for each category so you keep your money in control
        </Text>
      </View>
    </ScrollView>
  );
};
