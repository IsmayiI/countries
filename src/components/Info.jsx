import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { filterByCode } from "../config"
import { Link } from "react-router-dom"

const Wrapper = styled.section`
   margin-top: 3rem;
   width: 100%;
   display: grid;
   grid-template-columns: 100%;
   gap: 2rem;

   @media (min-width: 767px) {
      grid-template-columns: minmax(100px, 400px) 1fr;
      align-items: center;
      gap: 5rem;
   }

   @media (min-width: 1024px) {
      grid-template-columns: minmax(400px, 600px) 1fr;
   }
`

const InfoImg = styled.img`
   display: block;
   width: 100%;
   object-fit: contain;
   box-shadow: var(--shadow);
`

const InfoTitle = styled.h1`
   margin: 0;
   font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
   display: flex;
   flex-direction: column;

   gap: 2rem;

   @media (min-width: 1024px) {
      flex-direction: row;
      gap: 4rem;
   }
`

const List = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
`

const ListItem = styled.li`
   line-height: 1.8;

   & > b {
      font-weight: var(--fw-bold);
   }
`

const Meta = styled.div`
   margin-top: 3rem;
   display: flex;
   gap: 1.5rem;
   flex-direction: column;
   align-items: start;

   &>b {
      font-weight: var(--fw-bold);
   }

   @media (min-width: 767px) {
      flex-direction: row;
      align-items: center;
   }
`

const TagGroup = styled.ul`
   display: flex;
   gap: 1rem;
   flex-wrap: wrap;
   list-style: none;
`

const Tag = styled.li`
   padding: 0 1rem;
   background-color: var(--colors-ui-base);
   box-shadow: var(--shadow);
   line-height: 1.5;
   cursor: pointer;
`


const Info = (props) => {
   const {
      name,
      flags,
      capital,
      population,
      region,
      subregion,
      tld = [],
      currencies,
      languages,
      borders = []
   } = props

   const [neighbors, setNeighbors] = useState([])

   useEffect(() => {
      axios.get(filterByCode(borders))
         .then(({ data }) => setNeighbors(data.map(c => c.name.common)))
   }, [borders])

   const currencyKey = Object.keys(currencies)[0]
   const currencyName = currencies[currencyKey].name

   const language = Object.values(languages)[0]


   return (
      <Wrapper>
         <InfoImg src={flags.png} alt={name.common} />
         <div>
            <InfoTitle>{name.common}</InfoTitle>
            <ListGroup>
               <List>
                  <ListItem>
                     <b>Population:</b> {population}
                  </ListItem>
                  <ListItem>
                     <b>Region:</b> {region}
                  </ListItem>
                  <ListItem>
                     <b>Sub Region:</b> {subregion}
                  </ListItem>
                  <ListItem>
                     <b>Capital:</b> {capital}
                  </ListItem>
               </List>

               <List>
                  <ListItem>
                     <b>Top Level Domain:</b> {' '}
                     {tld.map(d => (
                        <span key={d}>{d}</span>
                     ))}
                  </ListItem>
                  <ListItem>
                     <b>Currency:</b> {' '}
                     <span>{currencyName}</span>
                  </ListItem>
                  <ListItem>
                     <b>Languages:</b> {' '}
                     <span>{language}</span>
                  </ListItem>
               </List>
            </ListGroup>
            <Meta>
               <b>Border Countries</b>
               {!borders.length ? (
                  <span>There is no border countries</span>
               ) : (
                  <TagGroup>
                     {neighbors.map(b => (
                        <Tag key={b}>
                           <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/country/${b}`}>{b}</Link>
                        </Tag>
                     ))}
                  </TagGroup>)}
            </Meta>
         </div>
      </Wrapper>
   )
}

export default Info