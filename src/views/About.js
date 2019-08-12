import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero/hero';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section/section';
import Header from 'components/Header';
import Footer from 'components/Footer';

const About = () => {
    return (
        <Hero size='fullheight'>
            <Header></Header>
            <Section>
                <Container>
                    Icons made by <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a> is licensed by <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank' rel='noopener noreferrer'>CC 3.0 BY</a>
                </Container>
            </Section>
            <Footer></Footer>
        </Hero>
    );
}

export default About;