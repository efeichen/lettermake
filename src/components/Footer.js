import React from 'react';
import Content from 'react-bulma-components/lib/components/content';

const Footer = () => {
    return (
        <footer className='footer has-text-centered'>
            <Content>
                <p>
                    <strong>LetterMake</strong> by <a href="https://efeichen.github.io">Kenneth Chen</a> | The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a> | The website content is licensed <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY NC 4.0</a>
                </p>
            </Content>
        </footer>
    )
}

export default Footer;

