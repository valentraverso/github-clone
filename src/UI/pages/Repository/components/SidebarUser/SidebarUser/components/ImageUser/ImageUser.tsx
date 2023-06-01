import './ImageUser.css'

interface Props {
    img: string;
}

const ImageUser = ({ img }: Props) => {
    return (
        <div>
            <img src={img} className='avatar-user__img' alt='user avatar' />
        </div>
    )
}

export default ImageUser