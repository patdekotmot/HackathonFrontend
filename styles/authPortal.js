import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalHeader: {
      flex: 2,
    },
    backBtn: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "transparent",
      width: 50,
    },
    backBtnText: {
      fontSize: 16,
      paddingTop: 8,
      letterSpacing: 0.25,
      color: "#5669ff",
    },
    modalHeaderHeading: {
      textAlign: "center",
      fontSize: 24,
      marginTop: 20,
      fontWeight: "bold",
    },
    inputContainer: {
      justifyContent: "center",
      marginHorizontal: 20
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      padding: 7,
      paddingLeft: 15,
      borderRadius: 30,
      marginVertical: 5
    },
    addBtn: {
      width: 50,
    },
    modalFooter: {
      flex: 1,
      alignItems: "center",
    },
  
    modalFooterButton: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      elevation: 4,
      alignItems: "center",
      backgroundColor: "#5669ff",
      width: 138,
    },
    modalFooterText: {
      fontSize: 16,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  
    diagnoseBtnContainer: {
      alignItems: "center",
    },
    button: {
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 100,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 30
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5
    },
    passIn: {
      fontSize: 20,
        fontWeight: '600',
        color: 'black',
        letterSpacing: 0.5
    },
    infoContainer : {
      marginVertical: 'center',
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  });

  export default styles