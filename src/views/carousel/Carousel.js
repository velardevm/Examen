import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'
import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const Carousel = () => {
  return (
    <CRow className="justify-content-md-center">
      <CCol xs lg="8">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>5 Imagenes</small>
          </CCardHeader>
          <CCardBody>
            <CCarousel controls indicators>
              <CCarouselItem>
                <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Primer imagen aleatoria</h5>
                  <p>Texto aleatorio 1</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Segunda imagen aleatoria</h5>
                  <p>Texto aleatorio 2</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={VueImg} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Tercer imagen aleatoria</h5>
                  <p>Texto aleatorio 3</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={ReactImg} alt="slide 4" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Cuarta imagen aleatoria</h5>
                  <p>Texto aleatorio 4</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={AngularImg} alt="slide 5" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>Quinta imagen aleatoria</h5>
                  <p>Texto aleatorio 5</p>
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Carousel
