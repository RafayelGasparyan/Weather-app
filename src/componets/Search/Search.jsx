import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL} from '../../api';
import axios from 'axios';

 const Search = ({onSearchChange}) => {
    const [search,setSearch] = useState(null)

    function loadOptions(inputValue) {
       return fetch(`${GEO_API_URL}/cities?minPopulations=1000000&namePrefix=${inputValue}`,geoApiOptions)
        .then((response)=>response.json())
        .then((response)=> {
            return {
               options: response.data.map((city)=> {
                return {
                    value:`${city.latitude} ${city.longitude}`,
                    label:`${city.name} ${city.countryCode}`
                }
               })
            }
        })
        .catch( (error)=> {
            console.error(error);
        });
    }

    function handleOnchange(searchData) {
        setSearch(searchData)
        onSearchChange(searchData)
    }
  return (
    <div>
        <AsyncPaginate
            placeholder="Search City"
            debounceTimeout={100}
            value={search}
            onChange={handleOnchange}
            loadOptions={loadOptions}
        />
    </div>
  )
}

export default Search;
