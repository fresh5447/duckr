import React from 'react';
import { container, title, slogan } from './styles.css';

const Home = (props) =>
  <div className={container}>
    <h4 className={title}> {'Duckr'} </h4>
    <p className={slogan}> {"Landing page for the thing."}</p>
  </div>

export default Home
