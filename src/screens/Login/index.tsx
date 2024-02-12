import React from "react";
import {
  Text,
  View
} from "react-native";
import { styles } from "../../styles/login";
import { useDispatch, useSelector } from "react-redux";

import Form from "./Form";

export default function ({ navigation }: any) {
  return (
    <View style={[styles.login, styles.flexCenter]}>
      <Text style={styles.header}>Login/Sign-Up</Text>
      <Form {...{ navigation }} />
    </View>
  );
}
