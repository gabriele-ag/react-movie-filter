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
            selectedFilm === "all" || curFilm.genre === selectedFilm);
        
        setFilteredFilm(newFilteredFilm);
        }, [selectedFilm]);



    return (
        <main>
            <select 
            value = {selectedFilm}
            onChange={(event) => setSelectedFilm(event.target.value)}>
                {filmArray.map((curFilm, index) => (
                    <option key={index} value={curFilm}>
                        {curFilm}
                    </option>
                ))}
            </select>
            <ul>
                {filmArray.map((curFilm, index) => (
                    <li key = {index}>{curFilm.title}</li>
                ))}
            </ul>
        </main>
    )
}

export default Main