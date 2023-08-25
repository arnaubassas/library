import './styles.css'
import books from './books.json';
import { Available } from './components/Available';
import { Read } from './components/Read';
import { useEffect, useState } from 'react';
let firstRender = true;

export const Base = () => {

    const { library } = books;
    const [lectura, setLectura] = useState([]);


    console.log('1', localStorage)
    console.log('2', lectura)
    console.log('4', firstRender)
    useEffect(() => {
        if (firstRender) {
            const initValor = localStorage.getItem('lectura');
            setLectura(initValor)
            firstRender = false;
        } else {
            const updatedLectura = [...lectura];
            console.log('3', updatedLectura)
            localStorage.setItem('lectura', JSON.stringify(updatedLectura));
        }
    }, [lectura]);



    return (
        <div className='screen'>

            <Available library={library} lectura={lectura} setLectura={setLectura} />

            <Read library={library} lectura={lectura} setLectura={setLectura} />

        </div>
    )

}