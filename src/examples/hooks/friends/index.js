import React, {useState, useEffect} from 'react';
import Item from "./components/Item";
import Status from "./components/Status";

export default function Friends() {

    const users = [
        {
            name: "Kourosh",
            status: true
        },
        {
            name: "Ali ",
            status: false
        },

    ];

    return (
        <ul>
            {users.map((user, i) =>
                <div>
                    <Item
                        key={i}
                        user={user}
                    />
                    <Status
                        key={i}
                        user={user}
                    />
                </div>
            )}
        </ul>
    );
}

