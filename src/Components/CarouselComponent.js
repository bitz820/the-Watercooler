import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'

function ControlledCarousel({datingPool}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    console.log(index)
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={datingPool[0].profile_picture}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{datingPool[0].username}</h3>
            <p>{datingPool[0].pickup_line}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={datingPool[1].profile_picture}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h3>{datingPool[1].username}</h3>
            <p>{datingPool[1].pickup_line}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={datingPool[2].profile_picture}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h3>{datingPool[2].username}</h3>
            <p>{datingPool[2].pickup_line}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default ControlledCarousel