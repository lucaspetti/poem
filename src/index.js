import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import "./css/style.css";

const language =  'english';
const languages = ['english', 'french', 'spanish', 'german', 'italian', 'portuguese'];

render(<App language={language} languages={languages} />,
       document.querySelector('#main'));