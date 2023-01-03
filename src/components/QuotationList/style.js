import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    filters: {
        flexDirection: "row",
        width: "100%",
        paddingVertical: 15,
        justifyContent: "space-evenly",
    },
    buttonQuery: {
        width: 50,
        height: 30,
        backgroundColor: "red",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonQuery: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    }
})

export default styles;