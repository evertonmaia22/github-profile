import { Section, Title, ListOfReposContainer, Repo } from './styles'

export function ReposContainer(props){

    return(
        <Section>
            <Title>Repositórios de {props.name}</Title>
            <ListOfReposContainer>
                {
                (props.repos).map(repo => (
                    <Repo key={repo?.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </Repo>
                    
                ))}
            </ListOfReposContainer>
        </Section>
    )
}