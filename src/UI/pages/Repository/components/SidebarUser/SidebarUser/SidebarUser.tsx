import ButtonVisit from "./components/ButtonVisit/ButtonVisit";
import FollowsSection from "./components/FollowsSection/FollowsSection";
import ImageUser from "./components/ImageUser/ImageUser";
import UserData from "./components/UserData/UserData";

interface Props {
    user: any;
}

function SidebarUser({ user }: Props) {
    const { avatar_url, name, login, bio, html_url: urlProfile, followers, following } = user;
    return (
        <aside>
            <ImageUser img={avatar_url} />
            <UserData name={name} login={login} bio={bio} />
            <ButtonVisit urlProfile={urlProfile} />
            <FollowsSection followers={followers} following={following} />
        </aside>
    )
}

export default SidebarUser