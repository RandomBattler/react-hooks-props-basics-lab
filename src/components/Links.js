import React from "react";

function Links(props){
    return(
        <>
        <h3>Links</h3>
        <a href={props.gHub}>{props.gHub}</a>
        <a href={props.linkedIn}>{props.linkedIn}</a>
        </>
    )
}

export default Links;