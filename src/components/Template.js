import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Template = ({ content }) => {
    return (
        <Document>
            <Page style={styles.body} size='LETTER'>
                <View style={styles.author}>

                </View>
                <View style={styles.recipient}>

                </View>
                <View style={styles.subject}>

                </View>
                <View style={styles.date}>

                </View>
                <View style={styles.salute}>

                </View>
                <View style={styles.content}>
                    <Text>
                        Hi my name is {content.author}. {content.personalization}
                    </Text>
                    <Text>
                        {content.interest}
                    </Text>
                    <Text>
                        I have attached a copy of my resume which details my skills and achievements. Please let me know what would be the best way to discuss my qualifications and how I could benefit the research conducted by your group.
                    </Text>
                    <Text>
                        If you have any further questions, please don’t hesitate to contact me at {content.phone} or {content.email}. Thank you for your time and consideration and I look forward to speaking with you.
                    </Text>
                </View>
                <View>
                    <Text>Sincerely,</Text>
                    <Text>{content.author}</Text>
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
});

export default Template;