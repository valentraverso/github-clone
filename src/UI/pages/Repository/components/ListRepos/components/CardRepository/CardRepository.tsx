import { useEffect, useState } from 'react';
import setDateUpdate from '../../../../../../../utils/misc/setDateUpdated';
import './CardRepository.css';
import '../../../../../../styles/colorsLanguages.css'

interface Props {
    repository: any;
}

export default function CardRepository({ repository }: Props) {

    const { updated_at } = repository;

    const [updatedDate, setUpdatepDate] = useState('');

    useEffect(() => {
        const updatedText = setDateUpdate(updated_at);

        setUpdatepDate(updatedText);
    }, [updated_at])

    return (
        <div className='container-repository-card__div'>
            <div>
                <div>
                    <span className='repository-name__span'>{repository.name}</span>
                </div>
                <div className='container-repository-data__div'>
                    {
                        repository.language &&
                        <span className='language-repository__span'><div className={`language-color__div ${repository.language}`}></div>{repository.language}</span>
                    }
                    <span className='time-updated__span'>{updatedDate}</span>
                </div>
            </div>
            <div>
                <span className='star-button__span'>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    Star</span>
            </div>
        </div>
    )
}