import React, { useContext } from "react";
import { Container } from "../components/container/styles";
import  {ReposContainer}  from "../components/reposContainer";
import { context } from "../context";

export function Repos(){
    const ctx = useContext(context);
    
    return(
        <Container>
            <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
        </Container>
    )
}