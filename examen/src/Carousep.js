import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
 
class DemoCarousel extends Component {
    render() {
        return (
            
                <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img className="d-block w-100" src="https://www.wpaperhd.com/uploads/originals/2016/03/08/kobe-bryant-black-mamba-nike-shoes-N5pD.jpg" alt="Mattonit's item" />   
                        
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img className="d-block w-100" src="https://wallpaper.wiki/wp-content/uploads/2017/05/Images-Download-Adidas-Shoes-Wallpapers-HD.jpg" alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img className="d-block w-100" src="https://picserio.com/data/out/328/vans-shoes-wallpaper_5361642.jpg" alt="Third slide" />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                      <img className="d-block w-100" src="https://festivalwallpaper.com/wallpapers-hd/shoe-wallpaper-picture-On-High-Resolution-Wallpaper.jpg" alt="First slide" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
   
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
        );
    }
};
export default DemoCarousel;