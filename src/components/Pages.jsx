
export const Pages = ({ library, setNumPages }) => {

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setNumPages(value);
    };

    return (
        <>
            <h4>Filtrar por páginas</h4>
            <input type="range" min="1" max="2000" onChange={handleSelectChange} defaultValue='1'></input>
        </>
    )

}