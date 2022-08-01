import { FavoriteButton } from '../favoriteButton';
import { Container, Name, Username, Description } from './styles'

export function UserDetails(props) {
    return (
        <>
        <FavoriteButton {...props.name} />
            <Container>
                <Name>{props.name}</Name>
                <Username>{props.login}</Username>
                <Description>{props?.bio}</Description>
            </Container>
        </>
    );
}