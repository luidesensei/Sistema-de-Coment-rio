import React from 'react'

// Functional stateless component.
const Comment = props =>
    <p className="well">
        
        {props.comment.comment}
    </p>

export default Comment

// <strong>{props.comment.user.name}</strong>:<br />