import React from 'react';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

const Form = ({ children }) => {
    return (
        <Section>
            <Container>
                <Heading size={1} className='has-text-centered'>LetterMake</Heading>
                {children}
            </Container>
        </Section>
    )
}

export default Form;