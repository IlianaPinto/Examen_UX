import React, { Component } from 'react';
import {base} from './base.json';
import Carousel from './Carousel';
import './App.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Home extends Component{
    constructor(props){
      super(props)
      this.state = { base }

    }

  render() { 
    return ( 
      <div>
        <MDBContainer>
                <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img className="d-block w-100" src="http://www.andreavilallonga.com/atelier/wp-content/uploads/image45.jpg" alt="First slide" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img className="d-block w-100" src="https://www.relevant.ninja/wp-content/uploads/2014/10/alpe-ariadne-artiles-look-6.jpg" alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Strong mask</h3>
                        <p>Second text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img className="d-block w-100" src="http://todofondos.com/bin/fondos/07/50/65d.jpg" alt="Third slide" />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight mask</h3>
                        <p>Third text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img className="d-block w-100" src="https://www.edicionessibila.com/eniusimg/cache/enius199/2016/06/adj-576d5149b3a14-753019-1024-800.jpg" alt="Mattonit's item" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Sopot Beach</h3>
                        <p>Taken june 21th by @mattonit</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
           
          
        <nav><h1>NEW ARRIVALS</h1></nav>
        <Carousel></Carousel>
      </div>

    );
  }
}

export default Home;