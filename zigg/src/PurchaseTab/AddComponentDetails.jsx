import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Style from "./Style.module.css";
const AddComponentDetails = () => {
  return (
    <Form className="p-4" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <Container>
        <Row className="mb-3">
          <Col md={3}>
            <div className='row'>
              <div className='card mt-3'>
                <h2>Vendor Detail</h2>
                <div className='col-12 bgcolor' >
                  <h5>Vendor Detail</h5>
                  <p><strong>Vendor Name:</strong> MOMAGIC TECHNOLOGIES PVT LTD</p>
                  <p>(VEN0853) MOMAGIC TECHNOLOGIES PVT LTD</p>
                  <p><strong>Vendor Address:</strong> 206, FF, PLOT NO. 190-191, NEELKANTH PALACE, DELHI</p>
                  <p><strong>Vendor GSTIN:</strong> 07AAHCM0426E1ZV</p>
                </div>
              </div>
              <div className='card mt-3' >
                <div className='col-12 p-3'>
                  <h5>Tax Detail</h5>
                  <p><strong>Sub-Total value before Taxes:</strong> 0.00</p>
                  <p><strong>CGST:</strong> (+) 0.00</p>
                  <p><strong>SGST:</strong> (+) 0.00</p>
                  <p><strong>IGST:</strong> (+) 0.00</p>
                  <p><strong>Sub-Total values after Taxes:</strong> 0.00</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={9} className='card mt-3 '>
            <Container fluid style={{}}>
              <Row>
                <Col md={12} >
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Component</th>
                        <th>Ord. Qty</th>
                        <th>Rate</th>
                        <th>Rate Cap</th>
                        <th>Tot Price</th>
                        <th>Proj. Req. Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(4)].map((_, index) => (
                        <tr key={index}>
                          <td>
                            <Form.Select aria-label="Component select">
                              <option value="1">(0805-5.6K-5%-0.125W-SMD-Resistor) P0000</option>
                              <option value="2">(Air Bubble Roll (100 m)) P0083</option>
                              <option value="3">(Plastic Casing_Mini UPS_D-LINK LOGO (Pad Printed)) P2460</option>
                              <option value="4">(screw 22mm) P3333</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Control type="number" defaultValue={1} min={0} />
                          </td>
                          <td>
                            <Form.Control type="number" step="0.01" min={0} />
                          </td>
                          <td>
                            <Form.Control type="number" step="0.01" min={0} />
                          </td>
                          <td>
                            <Form.Control type="number" step="0.01" min={0} readOnly />
                          </td>
                          <td>
                            <Form.Control type="number" defaultValue={0} min={0} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="secondary">Reset</Button>
          <div>
            <Button variant="secondary" style={{ marginRight: '10px' }}>Back</Button>
            <Button variant="primary">Submit</Button>
          </div>
        </div>
      </Container>
    </Form>
  );
}

export default AddComponentDetails;