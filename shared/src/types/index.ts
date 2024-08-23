import React, {JSXElementConstructor, ReactPortal} from 'react'

export type ReactComponent = 
| React.ReactElement<any, string | JSXElementConstructor<any>> 
| Iterable<React.ReactNode> 
| ReactPortal 
| boolean 
| null 
| undefined
| JSXElementConstructor<any>;

export interface AuxProps {
    children: ReactComponent
    component: ReactComponent
    className: string | undefined
}

export interface SharedComponentProps {
    Container: JSXElementConstructor<any>
    Text: JSXElementConstructor<any>
    Link: JSXElementConstructor<any>
}