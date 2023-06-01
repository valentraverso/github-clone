import ImageUser from "./ImageUser";

interface Props {
    user: any;
}

function SidebarUser({ user }: Props) {
    const { avatar_url } = user;
    return (
        <aside>
            <ImageUser img={avatar_url} />
        </aside>
    )
}

export default SidebarUser