import { ScrollView, StyleSheet, SafeAreaView, View, Text } from "react-native";
import React from "react";
import { images } from "../../constants";
import { Image } from "react-native";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState();

  const submit = () => {};
  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full flex justify-center min-h-[85vh] px-4 my-6">
            <Image
              source={images.logo}
              className="w-[115px] h-[35px]"
              resizeMode="contain"
            />
            <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
              Sign In
            </Text>
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setform({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setform({ ...form, password: e })}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Sign In"
              containerStyles="mt-7"
              handlePress={submit}
              isLoading={isSubmitting}
            />
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-secondary"
              >
                Sign Up
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
