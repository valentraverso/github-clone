import './CardRepository.css';

interface Props {
    repository: any;
}

export default function CardRepository({ repository }: Props) {
    return (
        <div className='container-repository-card__div'>
            <div>
                <div>
                    <span>{repository.name}</span>
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