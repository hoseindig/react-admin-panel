import React from "react";
import { Card, CardTitle, CardBody, CardText } from "react-bootstrap";

const Chart = ({ cubejsApi, title, query, render }) => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>
     
      </CardText>
    </CardBody>
  </Card>
);

export default Chart;