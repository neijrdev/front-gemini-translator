import Link from "next/link";
import HomeScreen from "../../../../shared/src/screens/HomeScreen";
import { SharedComponentProps } from "../../../../shared/src/types";

export const componentsProps : SharedComponentProps = {
    Container: "div",
    Text: "p",
    Link: Link
}

export const HomeScreenWeb = ({...props})=>{
    return <HomeScreen {...componentsProps} {...props} ></HomeScreen>
} 