import axios from "axios"
import { useEffect, useState } from "react"
import { IoArrowBack } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"
import { searchByCountry } from "../config"

const Details = () => {
   const { name } = useParams()

   const navigate = useNavigate()
   const goBack = () => navigate(-1)

   const [country, setCountry] = useState(null)

   console.log(country)

   useEffect(() => {
      axios.get(searchByCountry(name)).then(
         ({ data }) => setCountry(data[0])
      )
   }, [name])

   return (
      <div>
         <button onClick={goBack} >
            <IoArrowBack /> Back
         </button>
         Details {name}
      </div>
   )
}

export default Details