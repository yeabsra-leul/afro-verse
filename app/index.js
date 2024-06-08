import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex justify-center items-center h-full px-4 w-full">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-full max-w-[380px] h-[298px]"
            resizeMode="contain"
          />
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless{"\n"}
            Possibilities with{" "}
            <Text className="text-secondary-200">Afro verse</Text>
          </Text>
          <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute bottom-60 right-2"
            resizeMode="contain"
          />
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Afro verse
          </Text>
          <CustomButton
            containerStyles="w-full mt-7"
            title="Continue with Email"
            handlePress={()=>{router.push("/sign-in")}}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622"style="light"/>
    </SafeAreaView>
  );
};

export default Index;
