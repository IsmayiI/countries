import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.article`
   border-radius: var(--radii);
   background-color: var(--colors-ui-base);
   box-shadow: var(--shadow);
   cursor: pointer;
   overflow: hidden;
`

const CardImg = styled.img`
   display: block;
   width: 100%;
   height: 150px;
   object-fit: cover;
   object-position: center;
   box-shadow: var(--shadow);
`

const CardBody = styled.div`
   padding: 1rem 1.5rem 2rem;
`

const CardTitle = styled.h3`
   margin: 0;
   font-size: var(--fs-md);
   font-weight: var(--fw-bold);
`

const CardList = styled.ul`
   list-style: none;
   margin: 0;
   padding: 1rem 0 0;
`

const CardListItem = styled.li`
   display: flex;
   justify-content: space-between;
   font-size: var(--fs-sm);
   font-weight: var(--fw-light);
   line-height: 1.5;

   & > b {
      font-weight: var(--fw-bold);   
   }
`

// const deleteSpace = (str) => str.toLowerCase().split(' ').join('-')

const Card = ({ img, name, info = [] }) => {
   const slug = name

   return (

      <Link style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} to={`country/${slug}`}>
         <Wrapper>
            <CardImg src={img} />
            <CardBody>
               <CardTitle>{name}</CardTitle>
               <CardList>
                  {info.map((el) => (
                     <CardListItem key={el.title}>
                        <b>{el.title}:</b> {el.description}
                     </CardListItem>
                  ))}
               </CardList>
            </CardBody>
         </Wrapper>
      </Link>
   )
}

export default Card