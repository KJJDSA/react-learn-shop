import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function DataGrid(props) {
    return (
        <div className="content">
            <div className="main-bg"></div>
            <Row xs={1} md={2} className="g-4">
            {props.items.map((item, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={item.url} className="card-image"/>
                        <Card.Body>
                            <Card.Title className={'card-title'}>
                                <Link to={'/detail/'+ item.id}>
                                    <div className={'card-subheader'}>
                                        <h2>
                                            {item.title}
                                        </h2>
                                    </div>
                                </Link>
                            </Card.Title>
                            <Card.Text className={'card-textbox'}>
                                <div className={'card-subheader'}>
                                    <h3>price</h3>
                                </div>
                                <div className={'card-content'}>
                                    {item.price} {item.monetary}
                                </div>
                            </Card.Text>
                            <Card.Text className={'card-textbox'}>
                                <div className={'card-subheader'}>
                                    <h3>content</h3>
                                </div>
                                <div className={'card-content'}>
                                    {item.content}
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default DataGrid