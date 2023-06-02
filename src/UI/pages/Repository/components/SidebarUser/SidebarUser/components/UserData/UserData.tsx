import './UserData.css';

interface Props {
    name: string;
    login: string;
    bio: string;
}

export default function UserData({ name, login, bio }: Props) {
    return (
        <div>
            <h1 className='name-text__h1'>{name}</h1>
            <span className="username-text__span">{login}</span>
            {
                bio &&
                <p className='bio-user__p'>{bio}</p>
            }
        </div>
    )
}