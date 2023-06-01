interface Props {
    name: string;
    login: string;
    bio: string;
}

export default function UserData({ name, login, bio }: Props) {
    return (
        <div>
            <h1>{name}</h1>
            <span>{login}</span>
            {
                bio &&
                <p>{bio}</p>
            }
        </div>
    )
}