import AppScreen from "../../../shared/src/screens/AppScreen";
import { SharedComponentProps } from "../../../shared/src/types";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export const componentsProps : SharedComponentProps = {
    Container: View,
    Text: Text,
    Link: Link
}

export const AppScreenMobile = ({...props})=>{
    return <AppScreen {...componentsProps} {...props} ></AppScreen>
} 