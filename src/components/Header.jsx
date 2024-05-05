import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import { Container } from "./Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
   box-shadow: var(--shadow);
   background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 0;
`

const Title = styled(Link).attrs({
   to: '/'
})`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
   text-decoration: none;
`

const ModeSwitcher = styled.div`
   color: var(--colors-text);
   font-size: var(--fs-sm);
   // font-weight: var(--fw-bold);
   text-transform: capitalize;
   cursor: pointer;
`

const Header = () => {
   const [theme, setTheme] = useState('light')

   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

   useEffect(() => {
      document.body.setAttribute('data-theme', theme)
   }, [theme])

   const themeIcon = theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />

   return (
      <HeaderEl>
         <Container>
            <Wrapper>
               <Title>Where is the world?</Title>
               <ModeSwitcher onClick={toggleTheme}>
                  {themeIcon}
                  <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
               </ModeSwitcher>
            </Wrapper>
         </Container>
      </HeaderEl>
   )
}

export default Header