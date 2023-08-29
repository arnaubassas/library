
export const Lectura = ({ book, setLectura, lectura }) => {
    const { cover, title, ISBN } = book;

    const handleclick = () => {
        setLectura(lectura.filter((nueva) => !ISBN.includes(nueva)));
        const newValue = lectura.filter((nueva) => !ISBN.includes(nueva));
        localStorage.setItem('lectura', JSON.stringify(newValue));
    }

    return (
        <div className="card">
            <button className='buttonRead' onClick={handleclick}><img src='https://icones.pro/wp-content/uploads/2021/08/icone-x-avec-cercle-gris.png' width='20px' height='20px' alt='Cover'></img></button>
            <img height='250' width='150' src={cover} alt={title} />
        </div>
    )
}