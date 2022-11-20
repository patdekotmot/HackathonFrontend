import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    appName: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
    },
    landingHeader: {
      flex: 2,
      paddingTop: 100,
      paddingHorizontal: 50,
      paddingBottom: 40,
    },
    landingImage: {
      width: 300,
      height: 300,
    },
    landingBody: {
      flex: 1,
      textAlign: "center",
      marginTop: 60,
    },
    landingFooter: {
      flex: 1,
    },
    footerButton: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      elevation: 3,
      backgroundColor: "#5669ff",
    },
    footerText: {
      fontSize: 16,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },


    //Nishant
    button: {
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 50
      },
      buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5
      },
      bottomContainer: {
        justifyContent: 'center',
        height: height / 3,
        marginHorizontal: 20
      },
});

export default styles