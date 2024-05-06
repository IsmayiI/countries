import axios from "axios"
import { useEffect, useState } from "react"

import Controls from "../components/Controls"
import List from "../components/List"
import Card from "../components/Card"

import { ALL_COUNTRIES } from "../config"

const HomePage = () => {
   const [countries, setCountries] = useState([])
   const [filteredCountries, setFilteredCountries] = useState([])

   const searchHandler = (search, region) => {
      setFilteredCountries(null)
      let data = [...countries]

      if (region) {
         data = data.filter(c => c.region.includes(region))
      }

      if (search) {
         data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
      }

      setFilteredCountries(data)
   }


   useEffect(() => {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
         setCountries(data)
         setFilteredCountries(data)
      })
   }, [])


   return (
      <>
         <Controls onSearch={searchHandler} />
         <List>
            {filteredCountries.map(c => {
               const countryInfo = {
                  img: c.flags.png,
                  name: c.name.common,
                  info: [
                     {
                        title: 'Population',
                        description: `${c.population}`
                     },
                     {
                        title: 'Region',
                        description: c.region
                     },
                     {
                        title: 'Capital',
                        description: c.capital
                     }
                  ]
               }

               return (
                  <Card key={c.name.common} {...countryInfo} />
               )
            })}
         </List>
      </>
   )
}

export default HomePage