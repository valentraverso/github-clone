import { Link } from "react-router-dom";
import { BsArrowUpRight } from 'react-icons/bs'
import './ButtonVisit.css';

interface Props {
    urlProfile: string;
}

export default function ButtonVisit({ urlProfile }: Props) {
    return (
        <Link to={urlProfile} target="_blank" className="button-visit-profile__a">
            <span className="button-visit-flex__span">Visit Real Profile <BsArrowUpRight className="icon-arrow-a__svg" /></span>
        </Link>
    )
}