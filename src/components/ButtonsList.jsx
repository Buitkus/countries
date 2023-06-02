import React from 'react'

const ButtonsList = ({allCountries}) => {
  console.log(allCountries)

  const regions = []

  allCountries.map((country) => (
    regions.push(country.region)
  ))

  const newRegions = [...new Set(regions)];



  return (
     newRegions.map((item) => (
     <div>
       <button className={item}>{item}</button>
       </div>
  ))
  )
}

export default ButtonsList