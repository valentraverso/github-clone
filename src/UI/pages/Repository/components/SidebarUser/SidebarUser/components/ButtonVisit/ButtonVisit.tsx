import { Link } from "react-router-dom";
import { BsArrowUpRight } from 'react-icons/bs'

interface Props {
    urlProfile: string;
}

export default function ButtonVisit({ urlProfile }: Props) {
    return (
        <Link to={urlProfile} target="_blank">
            <span>Visit Real Profile <BsArrowUpRight /></span>
        </Link>
    )
}