import { IoSearch } from "react-icons/io5"
import styled from "styled-components"

const InputContainer = styled.label`
   display: flex;
   align-items: center;
   padding: 1rem 2rem;
   background-color: var(--colors-ui-base);
   border-radius: var(--radii);
   box-shadow: var(--shadow);
   width: 100%;
   margin-bottom: 1rem;

   @media (min-width: 767px) {
      width: 380px;
      margin-bottom: 0;
   }
`

const Input = styled.input.attrs({
   type: 'search',
   placeholder: 'Search for a country...'
})`
   margin-left: 2rem;
   border: none;
   outline: none;
   color: var(--colors-text);
   background-color: inherit;
`

const Search = ({ search, setSearch }) => {
   return (
      <InputContainer>
         <IoSearch size="14px" />
         <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </InputContainer>
   )
}

export default Search