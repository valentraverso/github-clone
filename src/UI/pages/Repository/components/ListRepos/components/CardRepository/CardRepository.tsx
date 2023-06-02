import { useEffect, useState } from 'react';
import './CardRepository.css';
import setDateUpdate from '../../../../../../../utils/misc/setDateUpdated';

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
                        <span className='language-repository__span'>{repository.language}</span>
                    }
                    <span className='time-updated__span'>{updatedDate}</span>
                </div>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}