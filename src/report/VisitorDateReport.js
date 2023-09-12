import React, { useState } from "react";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row,
  Button,
} from "reactstrap";
import PdfVisitationReport from "./PdfVisitationReport";

const VisitedDateReport = () => {
  const [data, setData] = useState({
    startDate: "",
    endDate: "",
  });
  const [showPrint, setShowPrint] = useState(false);
  const [response, setResponse] = useState({});
  const toggleShowPrint = () => {
    setShowPrint(!showPrint);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:7000/api/admin/visitstats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': JSON.parse(localStorage.getItem("token"))
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResponse(responseData);
      toggleShowPrint()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Start Date
          </small>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <input
                type="date"
                className="form-control"
                placeholder="Date Picker Here"
                value={data.startDate}
                onChange={(e) =>
                  setData({ ...data, startDate: e.target.value })
                }
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col>
          <small className="d-block text-uppercase font-weight-bold mb-3">
            End date
          </small>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <input
                type="date"
                className="form-control"
                placeholder="Date Picker Here"
                value={data.endDate}
                onChange={(e) =>
                  setData({ ...data, endDate: e.target.value })
                }
                min={data.startDate} // Set the minimum date based on Start Date
                disabled={!data.startDate} // Disable if Start Date is not filled
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
      <Button color="success" onClick={handleSubmit}>
        Generate report
      </Button>
      {showPrint && (
        <PdfVisitationReport setShow={toggleShowPrint} info={response} />
      )}
    </>
  );
};

export default VisitedDateReport;
