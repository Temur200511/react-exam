import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className="container-fluid p-0 m-0" style={{width: '100%'}}>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./Banner(1).png'
                    alt="First slide"
                />
            </Carousel.Item>
           <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./Banner(1).png'
                    alt="First slide"
                />
            </Carousel.Item><Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./Banner(1).png'
                    alt="First slide"
                />
            </Carousel.Item><Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./Banner(1).png'
                    alt="First slide"
                />
            </Carousel.Item><Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./Banner(1).png'
                    alt="First slide"
                />
            </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Slider;