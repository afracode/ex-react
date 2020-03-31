import useFriendStatus from "./useFriendStatus";
import React from "react";

export default function Item(props) {
    const isOnline = useFriendStatus(props.user.status);

    return (
        <li style={{color: isOnline ? 'green' : 'red'}}>
            {props.user.name}
        </li>
    );
}
