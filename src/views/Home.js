import React, {useState} from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Header from 'components/Header';
import ArticleForm from 'components/Form';
import { Field, Control, Label, Input, Textarea } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';

const Home = ({ setContent }) => {
    const [form, setForm] = useState({
        author: '',
        email: '',
        authorAddress: '',
        phone: '',
        recipient: '',
        recipientAddress: '',
        subject: '',
        date: '',
        interest: '',
        skills: ''
    });

        

    const onChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        setContent(form);        
    }

    return (
        <Hero size='fullheight'>
            <Header></Header>

            <ArticleForm>
                <Field>
                    <Label>Full Name</Label>
                    <Control>
                        <Input name='author' color='primary' className='is-size-5-tablet' value={form.author} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Email Address</Label>
                    <Control>
                        <Input name='email' color='primary' className='is-size-5-tablet' value={form.email} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Permanent Address</Label>
                    <Control>
                        <Input name='address' color='primary' className='is-size-5-tablet' value={form.address} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Phone Number</Label>
                    <Control>
                        <Input name='phone' color='primary' className='is-size-5-tablet' value={form.phone} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Recipient</Label>
                    <Control>
                        <Input name='recipient' color='primary' className='is-size-5-tablet' value={form.recipient} onChange={onChange} />
                    </Control>
                </Field>
                
                <Field>
                    <Label>Recipient Address</Label>
                    <Control>
                        <Textarea name='recipientAddress' color='primary' className='is-size-5-tablet' value={form.recipientAddress} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Subject</Label>
                    <Control>
                        <Input name='subject' color='primary' className='is-size-5-tablet' value={form.subject} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Date</Label>
                    <Control>
                        <Input name='date' color='primary' className='is-size-5-tablet' value={form.date} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Interest</Label>
                    <Control>
                        <Textarea name='interest' color='primary' className='is-size-5-tablet' value={form.interest} onChange={onChange} />
                    </Control>
                </Field>

                <Field>
                    <Label>Skills</Label>
                    <Control>
                        <Textarea name='skills' color='primary' className='is-size-5-tablet' value={form.skills} onChange={onChange} />
                    </Control>
                </Field>

                <Field kind='group'>
                    <Button color='primary' className='is-size-5-tablet' onClick={handleSubmit} renderAs={Link} to='/reader'>Convert</Button>
                </Field>
            </ArticleForm>
            
            <Footer></Footer>
        </Hero>
    )
}

export default Home;