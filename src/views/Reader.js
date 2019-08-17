import React from 'react';
import Container from 'react-bulma-components/lib/components/container/container';
import { PDFViewer } from '@react-pdf/renderer';
import Header from 'components/Header';
import Template from 'components/Template';
import Footer from 'components/Footer';

const Reader = ({ content }) => {
    return (
        <section>
            <Header></Header>
            <Container fluid style={{ margin: '20px 0 20px 0' }}>
                <PDFViewer width={612} height={792} id='letter'>
                    <Template content={content}></Template>
                </PDFViewer>
            </Container>
            <Footer></Footer>
        </section>
    )
}

export default Reader;