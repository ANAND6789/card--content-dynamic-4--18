import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

let data = [
  {
    h6Sec: 'Web Design & Development Course for Beginners',
    img:
      'https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?b=1&s=612x612&w=0&k=20&c=YB5hcfbhTfancgzjBOFtE0oynuoUsKBwr-BP7dHeI28=',
    video:
      'https://player.vimeo.com/external/453417259.sd.mp4?s=d207b2ba38b3ea7b84c71fed2e43a653b089191a&profile_id=164&oauth2_token_id=57447761',
    
  },
  // Add more items here
  {
    h6Sec: 'Web Design & Development Course for Beginners',
    img:
      'https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?b=1&s=612x612&w=0&k=20&c=YB5hcfbhTfancgzjBOFtE0oynuoUsKBwr-BP7dHeI28=',

    video:
         'https://player.vimeo.com/external/468468369.sd.mp4?s=cff46fccb137b7ad76d14018b9b423e4da2d5116&profile_id=164&oauth2_token_id=57447761'  },

  {
    h6Sec: 'Web Design & Development Course for Beginners',
    img:
      'https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?b=1&s=612x612&w=0&k=20&c=YB5hcfbhTfancgzjBOFtE0oynuoUsKBwr-BP7dHeI28=',
      video:
      'https://player.vimeo.com/external/566504539.sd.mp4?s=2ed7552928b081ef166bf9b5e5911acebc75c830&profile_id=164&oauth2_token_id=57447761',
  },

  {
    h6Sec: 'Web Design & Development Course for Beginners',
    img:
      'https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?b=1&s=612x612&w=0&k=20&c=YB5hcfbhTfancgzjBOFtE0oynuoUsKBwr-BP7dHeI28=',
      video:
      'https://player.vimeo.com/external/524921695.sd.mp4?s=6218d7450777d925b99e34c64d17abbfbf9af30b&profile_id=164&oauth2_token_id=57447761',  
    },

    {
      h6Sec: 'Web Design & Development Course for Beginners',
      img:
      'https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?b=1&s=612x612&w=0&k=20&c=YB5hcfbhTfancgzjBOFtE0oynuoUsKBwr-BP7dHeI28=',
      video:
      'https://player.vimeo.com/external/516552820.sd.mp4?s=d586d81e660d2b4f599337b03598bc49ac4c58c0&profile_id=164&oauth2_token_id=57447761',
    },

];

var settings = {
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    // Responsive settings
  ],
};

const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = '';
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: red;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
