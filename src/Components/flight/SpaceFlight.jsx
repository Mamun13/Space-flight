import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SpaceFlight = () => {
  return (
    <>
      <section>
        <Container>
          <div className="my-5">
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
                <Col lg={6}>
                  <div className="d-flex px-3">
                    <input
                      type="search"
                      className="form-control rounded-0"
                      placeholder="search in here"
                    />
                    <Button variant="primary" className="rounded-0">
                      Search
                    </Button>{" "}
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex px-3">
                    <Form.Select
                      aria-label="Default select example"
                      className="mx-2 rounded-0"
                    >
                      <option>Select status</option>
                      <option value="1">Success</option>
                      <option value="2">failure</option>
                    </Form.Select>
                    <Form.Select
                      aria-label="Default select example"
                      className="mx-2 rounded-0"
                    >
                      <option>Select status</option>
                      <option value="1">week</option>
                      <option value="2">days</option>
                      <option value="3">month</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpaceFlight;
