import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Template = ({ content }) => {
    return (
        <Document title={`${content.recipientLast} Cover Letter`}>
            <Page style={styles.body} size='LETTER'>
                <View style={styles.p}>
                    <Text>{content.authorFirst} {content.authorLast}</Text>
                    <Text>{content.address}</Text>
                    <Text>{content.email}</Text>
                    <Text>Cell: {content.phone}</Text>
                </View>
                <View style={styles.p}>
                    <Text>{content.recipientTitle} {content.recipientFirst} {content.recipientLast}</Text>
                    <Text>{content.recipientAddress}</Text>
                </View>
                <View style={styles.p}>
                    <Text>RE: {content.subject}</Text>
                </View>
                <View style={styles.p}>
                    <Text>{content.date}</Text>
                </View>
                <View style={styles.p}>
                    <Text>Dear {content.recipientTitle} {content.recipientLast},</Text>
                </View>
                <View style={styles.p}>
                    <Text>
                        My name is {content.authorFirst}. {content.interest}
                    </Text>
                </View>
                <View style={styles.p}>
                    <Text>{content.skills}</Text>
                </View>
                <View style={styles.p}>
                    <Text>
                        I have attached a copy of my resume which details my skills and achievements. Please let me know what would be the best way to discuss my qualifications and how I could benefit the research conducted by your group.
                    </Text>
                </View >
                <View style={styles.p}>
                    <Text>
                        If you have any further questions, please don’t hesitate to contact me at {content.phone} or {content.email}. Thank you for your time and consideration and I look forward to speaking with you.
                    </Text>
                </View>
                <View style={styles.p}>
                    <Text>Sincerely,</Text>
                </View>
                <View style={styles.p}>
                    <Text>{content.authorFirst} {content.authorLast}</Text>
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: '1in',
        fontFamily: 'Times-Roman',
        fontSize: '11pt',
        lineHeight: '1.15pt'
    },
    p: {
        marginBottom: '11pt'
    }
});

// Font.register()

export default Template;