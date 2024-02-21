import React from "react";
import {
  Text,
  View
} from "react-native";
import { styles } from "../styles/login";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/Form";

export default function () {
  return (
    <View style={[styles.login, styles.flexCenter]}>
      <Text style={styles.header}>Login/Sign-Up</Text>
      <Form />
    </View>
  );
}
