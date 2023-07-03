import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc,
    });
  };

  return (
    <View style={styles.contextImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
        <Text style={styles.resultImc}>{props.resultImc}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
