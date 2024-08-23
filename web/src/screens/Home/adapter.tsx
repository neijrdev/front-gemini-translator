import HomeScreen from "../../../../shared/src/screens/HomeScreen";
import { sharedComponentsProps } from "@/components";


export const HomeScreenWeb = ({...props})=>{
    return <HomeScreen {...sharedComponentsProps} {...props} ></HomeScreen>
} 