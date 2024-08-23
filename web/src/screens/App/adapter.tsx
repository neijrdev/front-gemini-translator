import Link from "next/link";
import AppScreen from "../../../../shared/src/screens/AppScreen";
import { SharedComponentProps } from "../../../../shared/src/types";

export const componentsProps : SharedComponentProps = {
    Container: "div",
    Text: "p",
    Link: Link
}

export const AppScreenWeb = ({...props})=>{
    return <AppScreen {...componentsProps} {...props} ></AppScreen>
} 