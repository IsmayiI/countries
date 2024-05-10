import styled from "styled-components"

const Wrapper = styled.section``

const InfoImg = styled.img``

const InfoTitle = styled.h1``

const ListGroup = styled.div``

const List = styled.ul``

const ListItem = styled.li``


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
      borders = [],
      push
   } = props

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
         </div>
      </Wrapper>
   )
}

export default Info