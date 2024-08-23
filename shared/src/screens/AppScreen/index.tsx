import React from 'react'
import {SharedComponentProps} from '../../types'


export interface AppScreenProps extends SharedComponentProps {}

export default function AppScreen (sharedComponentProps: SharedComponentProps) {
    const {Container, Text, Link} = sharedComponentProps
    return (
        <Container className="flex-1 items-center justify-center bg-white">
            <Text className="text-dark">App</Text>
            <Link className="text-blue-700" href="/home">Home</Link>
        </Container>
    )
}