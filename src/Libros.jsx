import './styles.css'
import books from './books.json';
import { Available } from './components/Available';
import { Read } from './components/Read';
import { useEffect, useState } from 'react';


export const Base = () => {

    const { library } = books;
    const [lectura, setLectura] = useState([]);



    useEffect(() => {
        // Al cargar la pestaña, obtenemos los datos almacenados en el local storage
        const storedLectura = JSON.parse(localStorage.getItem('lectura')) || [];
        setLectura(storedLectura);

        // Escuchar el evento storage para detectar cambios realizados en otras pestañas
        const handleStorageChange = (e) => {
            if (e.key === 'lectura' && e.newValue) {
                setLectura(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className='screen'>

            <Available library={library} lectura={lectura} setLectura={setLectura} />

            <Read library={library} lectura={lectura} setLectura={setLectura} />

        </div>
    )

}