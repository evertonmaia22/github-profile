import React from 'react'
import  { useNavigate }  from 'react-router-dom'
import { Container, NumberContainer } from './styles'

export function UserNumbers(props) {
    const navigate = useNavigate();
    
   
    return (
        <Container>
            <NumberContainer onClick={() => navigate ('/repos')}>
                <h1>{props.repos}</h1>
                <h2>Repositórios</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>{props.followers}</h1>
                <h2>Seguidores</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>{props.following}</h1>
                <h2>Seguindo</h2>
            </NumberContainer>
        </Container>
    )
}