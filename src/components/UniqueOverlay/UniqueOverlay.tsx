import React from 'react'
import {Container,Header,Logo,Burger,Footer} from './uniqueOverlayStyle'
const UniqueOverlay: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo/>
                <Burger/>
            </Header>
            <Footer>
                <ul>
                    <li>
                        <a href="#"></a>
                    </li>
                    <li>
                        <a href="#">made with</a>
                    </li>
                    <li>
                        <a href="#">by Ugurcan TURK</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay
