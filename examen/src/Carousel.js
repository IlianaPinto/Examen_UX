import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 
class Gallery extends React.Component {  
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };
  
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };
 
  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
  galleryItems() {
    return (
      [<img src="https://insightradionetwork.com/11278-1-large_default/Nuevo-2018-wwomen-zapatos-moda-mujeres-bombas-sexy-punta-estrecha-tacones-altos-partido-zapatos-mujer-tama%C3%B1o-grande-34-43.jpg" width="100px" height="100px"></img>, 
      <img src="http://www.serviciosintegralesseven.com/image/cache/data/category_3/comprar-sandalia-tacon-bajo-en-piel-blanco-formal-mujer-zapatos-2019-pqratbj-308-400x400_0.jpg" width="100px" height="100px"></img>, 
      <img src="http://www.handsaway.es/images/image/Mujer/Zapatos%20de%20tac%C3%B3n/2018%202019%20Zapatos%20Zapatos%20de%20moda%20Zapatos%20de%20Tac%20n%20BEIGE%20MEGIS%20ELEGANT%20-%20Primavera%20Verano%20Zapatos%20para%20Mujer%20Calzado%20de%20Mujer%20genuino%20-%20AFuUOisTvCic.jpg" width="100px" height="100px"></img>, 
      <img src="http://es.piccadilly.com.br/uploads/collection/PV1819/categories/1534357565-categoria-sapato.jpg  " width="100px" height="100px"></img>, 
      <img src="https://http2.mlstatic.com/sandalias-mujer-zapatos-moda-verano-2019-art-702-gamuza-D_NQ_NP_697185-MLA28515716443_102018-F.jpg" width="100px" height="100px"></img>].map((item, i) => (
        <div key={`key-${i}`} className="yours-custom-class"><h2>{item}</h2></div>
      ))
    )
  };
  
  render() {
    const items = this.galleryItems();
 
    return (
      <AliceCarousel
        items={items}
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        responsive={this.responsive}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}

export default Gallery;
 