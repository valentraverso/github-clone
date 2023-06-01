import ImageUser from "../ImageUser/ImageUser";
import UserData from "../UserData/UserData";

interface Props {
    user: any;
}

function SidebarUser({ user }: Props) {
    const { avatar_url, name, login, bio } = user;
    return (
        <aside>
            <ImageUser img={avatar_url} />
            <UserData name={name} login={login} bio={bio} />
        </aside>
    )
}

export default SidebarUser