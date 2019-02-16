import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay>
                <div>
                    <img src="https://www.yoamoloszapatos.com/wp-content/uploads/2016/12/zapatos-anchos-1024x536.jpg"/> 
                </div>
                <div>
                    <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/05/05/71/0659686ee09519c.jpg" />
                </div>
                <div>
                    <img src="https://vuelosbaratoshoy.com/wp-content/uploads/2018/10/Nueva-york-900x335.jpg" />          
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel;
 