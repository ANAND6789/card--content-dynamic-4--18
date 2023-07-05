  import React, { useState } from 'react';
  import styled from 'styled-components';

  const Project = (props) => {
    const { img, video, h6Sec, } = props.item;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <Container
        className='project'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      >
        <img className='card-img' src={img} alt='project' />
        <div className={`video-container ${isHovered ? 'show' : ''}`}>
          <video className='card-video' autoPlay muted loop>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        <div className='disc'>
        <h5 className='card-rating'>Rating : ★★★★☆</h5>
          <h6 className='h6Sec'>{h6Sec}</h6>
          <div className='button-group'>
            <button className='two-buttons'>
              Author Name
              </button>
            <button className='two-buttons' >View More</button>
          </div>
        </div>
      </Container>
    );
  };

  export default Project;

  const Container = styled.div`
    height: 10rem;
    background-color: #435b66;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;


    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 400ms ease-in-out;
      opacity: ${props => (props.isHovered ? 0 : 1)};
      visibility: ${props => (props.isHovered ? 'hidden' : 'visible')};
      
    }

    .card-rating {
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
      // margin-bottom: 15px;
      text-align: center;
    }
    

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 70%;
      opacity: 0;
      border: 8px;
      border-radius: 10px;
      visibility: hidden;
      transition: opacity 400ms ease-in-out;

      .card-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .show {
      opacity: 1;
      visibility: visible;
    }

      .disc {
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
        transition: all 400ms ease-in-out;


        
      .h6Sec {
          font-size: 0.5rem;
          text-align: center;

        }

        .button-group {
          display: flex;
          justify-content: space-around;
          margin-top: 0.5rem;


          .two-buttons {
            padding: 0.3rem 0.7rem; /* Adjust padding values to reduce button size */
            font-size: 0.5rem; /* Adjust font-size to match the reduced button size */
            background-color: #435B66;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 10px;
          }
        }
     }
    :hover > img {
      transform: scale(1.3);
    }

    :hover > .disc {
      bottom: 0;
    }
  `;

