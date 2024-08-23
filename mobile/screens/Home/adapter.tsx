import HomeScreen from "../../../shared/src/screens/HomeScreen";
import { SharedComponentProps } from "../../../shared/src/types";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export const componentsProps : SharedComponentProps = {
    Container: View,
    Text: Text,
    Link: Link
}

export const HomeScreenMobile = ({...props})=>{
    return <HomeScreen {...componentsProps} {...props} ></HomeScreen>
} 