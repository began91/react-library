import React, { useState } from 'react';
import './AddBook.css';
import { Formik, Form, Field } from 'formik';

const AddBook = props => {
    const [flipped,setFlipped] = useState(false);

    const displayForm = () => {
        setFlipped(true);
    }

    const handleFormik = (values, {setSubmitting, resetForm}) => {
        props.addBook(values);
        resetForm();
        setSubmitting(false);
        setFlipped(false);
    }
    
    return (
        <div id="new-book" onClick={displayForm}>
            <div className={flipped ? 'flip-card flipped' : 'flip-card'}>
              <div id="new-book-front">
                    <h1>    
                        New
                        <br/>
                        +
                        <br/>
                        Book
                    </h1>
                </div>
                <div id="new-book-back">
                    <h4>Add Book to Library</h4>
                    <Formik 
                    initialValues={{
                        title: '',
                        author: '',
                        pages: 0,
                        read: false,
                        picUrl: ''
                    }}
                    onSubmit={handleFormik}>
                        {
                            ({isSubmitting}) => (
                                <Form>
                                    <label htmlFor="title">Title:</label>
                                    <Field type="text" name="title"/>
                                    <label htmlFor="author">Author:</label>
                                    <Field type="text" name="author"/>
                                    <label htmlFor="pages">Pages:</label>
                                    <Field type="number" name="pages"/>
                                    <label htmlFor="read">Read?
                                    <Field type="checkbox" name="read"/>
                                    </label>
                                    <label htmlFor="picUrl">Cover URL:</label>
                                    <Field type="url" name="picUrl"/>
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AddBook;