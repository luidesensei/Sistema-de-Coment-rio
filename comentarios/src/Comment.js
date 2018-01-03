import React from 'react'

// Functional stateless component.
const Comment = props =>
    <p className="well">
        {props.comment.user && <strong>{props.comment.user.name}:<br /></strong>}
        {props.comment.comment}
    </p>

export default Comment
