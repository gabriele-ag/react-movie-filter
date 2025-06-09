import filmArray from "../src/data/filmlists.js"
import {useState} from "react"
import {useEffect} from "react"

function Main () {

    const [selectedFilm, setSelectedFilm] = useState("tutti")
    const [filteredFilm, setFilteredFilm] = useState(filmArray)
    const filmTypes = ["tutti", "Fantascienza", "Thriller", "Romantico", "Azione"]


    useEffect(() => {
        const newFilteredFilm = filmArray.filter(
            (curFilm) => 
            selectedFilm === "tutti" || selectedFilm === curFilm.genre);
        
        setFilteredFilm(newFilteredFilm);
        console.log("Filtro selezionato!")
        }, [selectedFilm]);

    const renderFilm = () => {
        return filteredFilm.map((curFilm, index) => (
            <li key={index}>{curFilm.title}</li>
        ))
    }


    return (
        <main>
            <select 
            value = {selectedFilm}
            onChange={(event) => setSelectedFilm(event.target.value)}>
                <option value="tutti">Tutti</option>     
                {filmTypes.map((curType, index) => (
                    <option key= {index} value= {curType}>{curType}</option>
                ))}
            </select>
         
            <div>
                <ul>
                    {renderFilm()}
                </ul>
            </div>
        </main>
    )
}

export default Main