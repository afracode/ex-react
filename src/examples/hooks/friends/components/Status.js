import useFriendStatus from "./useFriendStatus";

export default function Status(props) {
    const isOnline = useFriendStatus(props.user.status);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}
