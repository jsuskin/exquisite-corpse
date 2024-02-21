import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getMessage } from "../util/helper-methods/firebase";

export default function ({ route }: any) {
  const [message, setMessage] = useState<any>();
  const { selectedMessageId } = route.params;

  console.log({selectedMessageId})

  useEffect(() => {
    (async () => {
      const message = await getMessage(selectedMessageId);
      setMessage(message);
    })();
  }, []);

  useEffect(() => {
    console.log({ message });
  }, [message]);

  return (
    <View>
      <Text>Viewing Message {selectedMessageId}</Text>
    </View>
  );
}
