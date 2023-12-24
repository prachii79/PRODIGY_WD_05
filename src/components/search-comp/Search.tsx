import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiCities } from "../../cityApi"

export default function Search({onSearchChange}){

    const [search, setSearch] = useState(null)

    function handleChange(searchData) {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    function loadOption(inputVal) {
        return(
            fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputVal}`, geoApiCities)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return{
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.country}`
                        }
                    })
                }
            }
        )
        .catch((err) => console.log(err))
        )
    }

    return(
        <div>
            <AsyncPaginate 
            placeholder = "select your city"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOption}
            />
        </div>
    )
}