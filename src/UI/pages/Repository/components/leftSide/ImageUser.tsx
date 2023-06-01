interface Props {
    img: string;
}

const ImageUser = ({ img }: Props) => {
    return (
        <div>
            <img src={img} />
        </div>
    )
}

export default ImageUser