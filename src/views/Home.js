import React, { useState } from 'react';
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
                <Field className='is-horizontal'>
                    <Label className='field-label'>Author</Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='First Name' name='authorFirst' color='primary' value={form.authorFirst} onChange={onChange} />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Input placeholder='Last Name' name='authorLast' color='primary' value={form.authorLast} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>
                <Field className='is-horizontal'>
                    <Label className='field-label'></Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='Email' name='email' color='primary' value={form.email} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>
                <Field className='is-horizontal'>
                    <Label className='field-label'></Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='Address' name='email' color='primary' value={form.address} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>
                <Field className='is-horizontal'>
                    <Label className='field-label'></Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='Phone: (XXX) XXX-XXX' name='phone' color='primary' value={form.phone} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>

                <Field className='is-horizontal'>
                    <Label className='field-label'>Recipient</Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='Title' name='recipientTitle' color='primary' value={form.recipientTitle} onChange={onChange} />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Input placeholder='First Name' name='recipientFirst' color='primary' value={form.recipientFirst} onChange={onChange} />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Input placeholder='Last Name' name='recipientLast' color='primary' value={form.recipientLast} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>
                <Field className='is-horizontal'>
                    <Label className='field-label'></Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Textarea placeholder='Address' name='recipientAddress' color='primary' value={form.recipientAddress} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>

                <Field className='is-horizontal'>
                    <Label className='field-label'>Subject</Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='Subject' name='subject' color='primary' value={form.subject} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>

                <Field className='is-horizontal'>
                    <Label className='field-label'>Date</Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Input placeholder='Date' name='date' color='primary' value={form.date} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>

                <Field className='is-horizontal'>
                    <Label className='field-label'>Personalize</Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Textarea placeholder='How did your background led to your interest in this job? Which aspect or part of the job intrigues you? Why?' name='interest' color='primary' value={form.interest} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
                </Field>
                <Field className='is-horizontal'>
                    <Label className='field-label'></Label>
                    <div className='field-body'>
                        <Field>
                            <Control>
                                <Textarea placeholder='What skills do you have that make you qualify for the job?' name='skills' color='primary' value={form.skills} onChange={onChange} />
                            </Control>
                        </Field>
                    </div>
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