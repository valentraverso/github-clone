// import { useEffect, useState } from 'react';
import './CardRepository.css';

interface Props {
    repository: any;
}

export default function CardRepository({ repository }: Props) {

    // const [actualDate, setActualDate] = useState();

    // const actualDate = new Date();


    // useEffect(() => {
    //     switch (repository.update_at) {
    //         case 1:
    //             return "as";

    //     }
    // })

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
                    <span className='time-updated__span'>{repository.updated_at}</span>
                </div>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}