import ButtonVisit from "./components/ButtonVisit/ButtonVisit";
import ImageUser from "./components/ImageUser/ImageUser";
import UserData from "../UserData/UserData";

interface Props {
    user: any;
}

function SidebarUser({ user }: Props) {
    const { avatar_url, name, login, bio, html_url: urlProfile } = user;
    return (
        <aside>
            <ImageUser img={avatar_url} />
            <UserData name={name} login={login} bio={bio} />
            <ButtonVisit urlProfile={urlProfile} />
        </aside>
    )
}

export default SidebarUser