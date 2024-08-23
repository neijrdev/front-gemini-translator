import Link from "next/link";
import { SharedComponentProps } from "../../../shared/src/types";
import Button from "./Button";

export const sharedComponentsProps : SharedComponentProps = {
    Container: "div",
    Text: "p",
    Link: Link,
    Button: Button
}