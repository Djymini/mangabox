import {FC, useState} from 'react';

const CheckBoxItem: FC<{nameGenre: string, arrayGenre: number[], genreNumber:number,updateArrayGenre: (genreNumber: number, isChecked: boolean) => void  }> = ({nameGenre, arrayGenre, genreNumber, updateArrayGenre}) => {
    const [isChecked, setIsChecked] = useState<boolean>(arrayGenre.includes(genreNumber));

    const handleChange = () => {
        setIsChecked(!isChecked)
        updateArrayGenre(genreNumber, isChecked)
    }


    return (
        <label className="container">{nameGenre}
            <input type="checkbox" checked={isChecked} onChange={handleChange}/>
            <span className="checkmark"></span>
        </label>
    );
};

export default CheckBoxItem;
