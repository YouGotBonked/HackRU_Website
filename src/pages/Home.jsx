import React from 'react';
import { Link } from 'react-router';
import './Home.css';

function Home() {
    return (
        <div className="container fade-in-top">
            <h1 className="text-center home-title">
                DermaML
            </h1>
            <div className="description">
                <p>DermaML is an experimental prototype intended for educational research. <br></br> It utilizes a machine trained on over 10,000 skin samples to predict whether someone may have skin cancer or not based on a non-invasive photo uploaded to the webpage.
                </p>
                <p className={"disclaimer"}>
                    <b>Disclaimer</b>: This tool does not give a guaranteed diagnosis. This is simply meant to provide information to the user to allow them to make an informed decision. We recommend all users to visit a professional for an official diagnosis and treatment plan.
                </p>
            </div>
            <div className={'to-upload'}>
                <Link className="animated-button" to={'/Upload'}>
                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className="text">Upload Now</span>
                    <span className="circle"></span>
                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Home;