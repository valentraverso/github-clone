interface Props {
    followers: number;
    following: number;
}

export default function FollowsSection({ followers, following }: Props) {
    return (
        <div>
            <span>{followers}</span>
            <span>{following}</span>
        </div>
    )
}