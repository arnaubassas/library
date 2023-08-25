
export const ImageDisponible = ({ book, lectura, setLectura, filter, numPages }) => {
    const { cover, title, ISBN, genre, pages } = book;

    const handleclick = () => {
        setLectura([...lectura, ISBN]);
    }

    if (filter !== 'Todas') {
        if (filter === genre) {
            if (numPages <= pages) {
                return (
                    <div className="card">
                        <button disabled={lectura.includes(ISBN)} className='button2' onClick={handleclick}><img className='zoom-image' height='250' width='150' src={cover} alt={title} /></button>
                    </div>
                )
            }
        }
    } else {
        if (numPages <= pages) {
            return (
                <div className="card">
                    <button disabled={lectura.includes(ISBN)} className='button2' onClick={handleclick}><img className='zoom-image' height='250' width='150' src={cover} alt={title} /></button>
                </div>
            )
        }
    }
}