import Link from 'next/link';
import styled from 'styled-components';

const Navbar = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`

const StyledLink = styled.a`
    padding: 0rem 2rem;
    color: #fff;
    text-decoration: none;
`

const Nav = () => {
    return(
        <Navbar>
            <div>
                <Link href="/" passHref>
                    <StyledLink>NEXT-BP</StyledLink>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>home</StyledLink>
                </Link>
                <Link href="/list" passHref>
                    <StyledLink>list</StyledLink>
                </Link>
            </div>
        </Navbar>
    )
}

export default Nav;