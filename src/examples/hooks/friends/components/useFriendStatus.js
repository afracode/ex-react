import React, {useState, useEffect} from 'react';

export default function useFriendStatus(status) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status);
    }

    useEffect(() => {

        handleStatusChange(status);
    });

    return isOnline;
}

