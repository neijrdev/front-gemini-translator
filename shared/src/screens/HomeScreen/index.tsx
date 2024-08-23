import React from 'react'
import {SharedComponentProps} from '../../types'

export interface HomeScreenProps extends SharedComponentProps {}

export default function HomeScreen (sharedComponentProps: SharedComponentProps) {
    const {Container, Text, Link, Button} = sharedComponentProps
    return (
        <Container className="flex min-h-screen flex-1 items-center justify-center flex-col">
            <Text className="text-dark">Home</Text>
            <Link className="text-blue-700" href="/">App</Link>
            {/* <Button onPress={()=> console.log("Press button")} className="text-blue-700" href="/">
                <Text className="text-dark">Button</Text>
            </Button> */}
        </Container>
    )
}