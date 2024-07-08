import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const labelStyle = {
  display: 'block',
  textAlign: 'left',
  marginBottom: '0.5rem'
};
const asteriskStyle = {
  color: 'red'
};
const borderBottomStyle = {
  borderBottom: '1px solid #ccc',
  paddingBottom: '1rem',
  marginBottom: '1rem'
};

const PurchaseOrderForm = () => {
  return (
    <Form className="p-4">
      <h2 style={labelStyle}>Purchase Order Form</h2>

      {/* PO Type */}
      <Row className="mb-3" style={borderBottomStyle}>
        <Form.Group as={Col} controlId="poType">
          <Form.Label style={labelStyle}>
            PO Type <span style={asteriskStyle}>*</span>
          </Form.Label>
          <Form.Control as="select" required style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23000\' d=\'M2 5L0 3h4z\'/%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .75rem bottom .25rem', backgroundSize: '8px 10px' }}>
            <option>New</option>
            <option>Supplementary</option>
          </Form.Control>
        </Form.Group>
      </Row>

      {/* Vendor Details */}
      <h4 style={labelStyle}>Vendor Details</h4>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="vendorType">
          <Form.Label style={labelStyle}>Vendor Type <span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control as="select" required>
            <option>Vendor</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="vendorName">
          <Form.Label style={labelStyle}>Vendor Name <span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group as={Col} controlId="vendorBranch">
          <Form.Label style={labelStyle}>Vendor Branch <span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="gstin">
          <Form.Label style={labelStyle}>GSTIN<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="msmeId">
          <Form.Label style={labelStyle}>MSME Id<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="billFromAddress" style={borderBottomStyle}>
        <Form.Label style={labelStyle}>Bill From Address<span style={asteriskStyle}>*</span></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      {/* PO Terms */}
      <h4 style={labelStyle}>PO Terms</h4>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="termsAndConditions">
          <Form.Label style={labelStyle}>Terms and Conditions<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3" >
        <Form.Group as={Col} controlId="costCenter">
          <Form.Label style={labelStyle}>Cost Center<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="projectId">
          <Form.Label style={labelStyle}>Project ID<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="quotation">
          <Form.Label style={labelStyle}>Quotation<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      <Row className="mb-3" >
        <Form.Group as={Col} controlId="paymentTerms">
          <Form.Label style={labelStyle}>Payment Terms<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="dueDate">
          <Form.Label style={labelStyle}>Due Date (in days)<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>

      <Row className="mb-3" style={borderBottomStyle}>
        <Form.Group as={Col} controlId="projectDescription">
          <Form.Label style={labelStyle}>Project Description<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="comments">
          <Form.Label style={labelStyle}>Comments<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="requestedBy">
          <Form.Label style={labelStyle}>Requested By<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      {/* Billing Details */}
      <h4 style={labelStyle}>Billing Details</h4>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="billingId">
          <Form.Label style={labelStyle}>Billing Id<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="billingAddress">
          <Form.Label style={labelStyle}>Billing Address<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3" style={borderBottomStyle}>
        <Form.Group as={Col} controlId="billingPanNo">
          <Form.Label style={labelStyle}>PAN No.<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="billingGstin">
          <Form.Label style={labelStyle}>GSTIN / UIN<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      {/* Shipping Details */}
      <h4 style={labelStyle}>Shipping Details</h4>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="shippingId">
          <Form.Label style={labelStyle}>Shipping Id<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="shippingAddress">
          <Form.Label style={labelStyle}>Shipping Address<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="mb-3" style={borderBottomStyle}>
        <Form.Group as={Col} controlId="shippingPanNo">
          <Form.Label style={labelStyle}>PAN No.<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="shippingGstin">
          <Form.Label style={labelStyle}>GSTIN / UIN<span style={asteriskStyle}>*</span></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>

      <Row className="mb-3" >
        <Col className="text-right d-flex justify-content-end">
          <Button variant="primary" type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default PurchaseOrderForm;
