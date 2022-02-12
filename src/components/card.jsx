import { Card, ProgressBar ,Badge} from "react-bootstrap";
const CardBox = ({ header, color = null, title = null }) => {
  // primary//secondary

  const min = 10;
  const max = 100;
  const fakeData1 = (Math.random() * (max - min) + min).toFixed(0);
  const fakeData2 = (Math.random() * (max - min) + min).toFixed(0);
  const fakeData3 = (Math.random() * (max - min) + min).toFixed(0);
  const fakeData4 = (Math.random() * (max - min) + min).toFixed(0);
  //   "dark" : "white"}
  return (
    <Card border={color} bg="light" text="dark" className="m-2">
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {title} 
          <Badge bg={color}>({fakeData1})</Badge>  
        </Card.Subtitle>
        <Card.Text>
          <ProgressBar
            animated
            now={fakeData1}
            variant={color}
            label={` ${fakeData1}%`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
