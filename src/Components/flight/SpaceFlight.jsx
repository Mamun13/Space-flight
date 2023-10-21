import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FlightCard from "./FlightCard";

const SpaceFlight = () => {
  return (
    <>
      <section>
        <Container>
          <div className="my-5 mb-3">
            <h1 className="text-capitalize text-center mt-5">
              Spaceflight details
            </h1>
            <p className="text-center">
              Find out the elaborate features of all past big spaceflights.
            </p>
          </div>
          <div className="form_part">
            <Form>
              <Row>
                <Col lg={6} md={6}>
                  <div className="d-flex px-3 mb-3">
                    <input
                      type="search"
                      className="form-control search_form"
                      placeholder="search in here"
                    />
                    <Button variant="primary" className="rounded-0">
                      Search
                    </Button>{" "}
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  `1  `
                  <Row>
                    <Col lg={6} md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className="mx-2 mx-sm-0 rounded-1"
                      >
                        <option>Select status</option>
                        <option value="1">Success</option>
                        <option value="2">failure</option>
                      </Form.Select>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className="mx-2 mx-sm-0 rounded-1"
                      >
                        <option>Select status</option>
                        <option value="1">week</option>
                        <option value="2">days</option>
                        <option value="3">month</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
          <FlightCard />
        </Container>
      </section>
    </>
  );
};

export default SpaceFlight;
