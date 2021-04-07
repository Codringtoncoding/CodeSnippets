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