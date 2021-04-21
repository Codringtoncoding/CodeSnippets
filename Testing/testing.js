//side by side files

import React from 'react';

import { render } from "@testing-libary/React"

//set up

jest.mock(//path for the dependicy is the first dependicy
     './SignUpForm', () => {
         SignUpForm: () => null 
//when we load in dependicy instead of returning the module second parameter is a call back function

//retrun object module sign up form empty function and it returns null as we dont care



});


test.todo

test()

// test.only or test.skip

//render fuctuin form testing libary

test('renders with correct titile'), () => {

    const { getByText} = render(<ReactTestingLibartyPage/>)
    //get the title
    expect( getByText('React Testing libary Page'))

    tobeInTheDocumnet();
}

test.todo('renders sign up form')


//jest.fn is helps with calling etc


jest.mock(//path for the dependicy is the first dependicy
    './SignUpForm', () => {
        SignUpForm: jest.fn(() => null)
//when we load in dependicy instead of returning the module second parameter is a call back function

//retrun object module sign up form empty function and it returns null as we dont care


//expect sign up form to have been called 

//must mock out the dependacnies 

//mock out dependicse by importing them

jest.mock(//path for the dependicy is the first dependicy
    './nextRouter, () => {
        useRouter: () => {
            push: jest.fn() //take the destructred push ucntion from the router
        })
}));




