import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    bottom: 0,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  form: {
    width: "100%",
    height: "auto",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#FFF",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exihibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 26,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList: {
    fontSize: 16,
  },
});

export default styles;
