import Form from './Form.test.js'
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



//testing if the submit button Works
test('submit button works on click', () => {
    render(<Form />);
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
    });


//testing  if the submit button has "Submit" as a text
test('submit button has "submit" as text', () => {
    render(<Form />);
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Submit');
    });


//testing if the clear button Works
test('clear button works on click', () => {
    render(<Form />);
    const clearButton = screen.getByText('Clear');
    expect(clearButton).toBeInTheDocument();
    }
    );


//test if the h2 tag has "Offer a Study Session" as a text
test('h2 tag has "Offer a Study Session" as text', () => {
    render(<Form />);
    const h2 = screen.getByText('Offer a Study Session');
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('Offer a Study Session');
    }
    );


    

