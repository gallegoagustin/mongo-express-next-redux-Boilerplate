import styled from 'styled-components';

const FooterDiv = styled.div`
    border-top: 1px solid grey;
    background: white;
    text-align: left;
    padding: 2rem;
    bottom: 0;
    min-height: 2rem;
    margin-top: 2rem;
`

const Footer = () => {
    return (
        <FooterDiv>
            así se importa el footer
        </FooterDiv>
    )
}

export default Footer;