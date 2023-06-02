import {useState, useEffect} from 'react'
import getAllCountriesInfo from '../services/countriesService'
import ButtonsList from './ButtonsList';
import Country from './Country';

const Main = () => {
    // state visada aprasomas virsuje
    const [countries, setCountries] = useState([]);

    const getData = () => {
        // gauti duomenis is serviso
        getAllCountriesInfo()
        .then(response => setCountries(response))
    }

    // kada pakviesi daryti req uzklausa pasako mums effect

    useEffect(() => {
    getData();
    }, []);

  
    const myCountries = [];
    countries.map((country) => (
      myCountries.push(country.region)
    ))

    let sortedCountries = [];


    

    
   
  
   

    // console.log(countries);
  return (
    <div>
      <ButtonsList allCountries={countries} />
        <Country allCountries={countries}/>
    </div>
  )
}

export default Main