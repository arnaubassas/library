import { Lectura } from "./Lectura";


export const Read = ({ library, lectura, setLectura }) => {

    const read = library.filter((libros) => lectura.includes(libros.book.ISBN))
    if (lectura.length === 0) {
        return null
    } else {
        return (
            <div className="read">
                <h1 className="title">Lista de Lectura</h1>
                <div className="covers">
                    {read.map((image) => (
                        <Lectura key={image.book.ISBN} {...image} setLectura={setLectura} lectura={lectura} />

                    ))}
                </div>
            </div>
        );
    }
}