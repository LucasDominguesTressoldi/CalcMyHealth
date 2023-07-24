import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calculate");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let totalImc = (weight / (heightFormat / 100) ** 2).toFixed(2);
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
  }

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("* Required field");
    }
  }

  function validationImc() {
    Keyboard.dismiss();
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Your BMI is equal to:");
      setTextButton("Calculate again");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calculate");
      setMessageImc("Fill in the weight and height");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Height</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 175cm"
            keyboardType="numeric"
            style={styles.input}
          />
          <Text style={styles.formLabel}>Weight</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 80.53kg"
            keyboardType="numeric"
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exihibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Result BMI = </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
