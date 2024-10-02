import React from 'react';
import styled from 'styled-components';
import { sponsorsImgs } from '../data/sponsors.js';

function Sponsers() {
    return (
        <SponsersContainer>
            <h1 className='universal-heading'>Sponsors</h1>
            <div className="slider">
                <div className="slide-track">
                    {[...sponsorsImgs, ...sponsorsImgs, ...sponsorsImgs].map((img, index) => {
                        return (
                            <div className="slide" key={index + '-' + img.img}>
                                <img src={img.img} alt={`Sponsor ${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </SponsersContainer>
    );
}

export default Sponsers;

const SponsersContainer = styled.div`
    .slide-track {
        display: flex;
        width: calc(200px * ${sponsorsImgs.length} * 3); /* Adjust width based on the number of images */
        animation: scroll 30s linear infinite;
        gap: 20px;
    }

    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide img {
        width: 200px;
    }

    .slider {
        overflow: hidden;
        padding: 3em 2em;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-200px * ${sponsorsImgs.length}));
        }
    }
`;
