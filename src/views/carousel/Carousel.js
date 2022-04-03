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
import { DocsCallout, DocsExample } from 'src/components'

import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const slidesLight = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]

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
