import { Container, ProfilePicture } from "./styles"


export function UserPicture(props){
    return(
        <Container>
            <ProfilePicture src={props?.url} alt={props?.alternativeText}/>
        </Container>
    )
}