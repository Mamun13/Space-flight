import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Flight from "../../asset/02.png"
import "./FlightCard.css"

const FlightCard = () => {
    return (
        <>
            <section className='mt-5 px-1'>
                <Container>
                    <Row>
                        <Col lg={4} md={6} className='mb-3'>
                            <div className='border rounded-1 d-flex justify-content-center'>
                                <div>
                                    <img src={Flight} alt='' className='img-fluid card_img my-4' />
                                    <p className='text-center mb-0  text-secondary'>Launch date: 25 Feb 2006</p>
                                    <h2 className='text-center text-capitalize'>FalconSat</h2>
                                    <p className='text-center mb-0 text-secondary'>Falcon1</p>

                                    <h4 className='text-center text-capitalize text-secondary mt-4'>launch status:  </h4>
                                    <p className='text-center mt-4'><span className='text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-danger'>Failed</span> </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className='mb-3'>
                            <div className='border rounded-1 d-flex justify-content-center'>
                                <div>
                                    <img src={Flight} alt='' className='img-fluid card_img my-4' />
                                    <p className='text-center mb-0  text-secondary'>Launch date: 25 Feb 2006</p>
                                    <h2 className='text-center text-capitalize'>FalconSat</h2>
                                    <p className='text-center mb-0 text-secondary'>Falcon1</p>

                                    <h4 className='text-center text-capitalize text-secondary mt-4'>launch status:  </h4>
                                    <p className='text-center mt-4'><span className='text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-danger'>Failed</span> </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FlightCard