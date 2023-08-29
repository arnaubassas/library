import { useState } from "react";
import { ImageDisponible } from "./ImageDisponible";
import { Genre } from "./Genre";
import { Pages } from "./Pages";

export const Available = ({ library, lectura, setLectura }) => {

    const disponibles = library.filter((libros) => !lectura.includes(libros.book.ISBN));
    const [filter, setFilter] = useState("Todas");
    const [numPages, setNumPages] = useState('1');

    return (
        <div className="available">
            <div className="text">
                <h1>{disponibles.length} libros disponibles</h1>
                {lectura.length > 0 && <div><h5>{lectura.length} en la lista de lecturas</h5></div>}
                <div className="filters">
                    <div className="filters2">
                        <Pages library={library} setNumPages={setNumPages} numPages={numPages} />
                    </div>
                    <div>
                        <Genre library={library} setFilter={setFilter} />
                    </div>
                </div>
            </div>
            <div className="covers">
                {library.map((image) => (
                    <ImageDisponible key={image.book.ISBN} {...image} setLectura={setLectura} lectura={lectura} filter={filter} numPages={numPages} />

                ))}
            </div>
        </div>
    );
}