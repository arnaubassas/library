

export const Genre = ({ library, setFilter }) => {

    const genres = [...new Set(library.map(objeto => objeto.book.genre))];

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setFilter(value);
    };

    return (
        <>
            <h4>Filtrar por género</h4>
            <select id="selectInput" onChange={handleSelectChange}>
                <option>Todas</option>
                {genres.map((genre) => (
                    <option value={genre} key={genre}>{genre}</option>
                ))}
            </select>
        </>
    )

}