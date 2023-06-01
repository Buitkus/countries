import {useState, useEffect} from 'react'
import getAllCountriesInfo from '../services/countriesService'

const Main = () => {
    // state visada aprasomas virsuje
    const [countries, setCountries] = useState([]);

    const getData = () => {
        // gauti duomenis is serviso
        getAllCountriesInfo()
        .then(response => setCountries(response.data))
    }

    // kada pakviesi daryti req uzklausa pasako mums effect

    useEffect(() => {
    getData();
    }, []);
    console.log(countries);
  return (
    <div>Main</div>
  )
}

export default Main