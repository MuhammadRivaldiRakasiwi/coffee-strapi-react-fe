import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product(props) {
    const headerText = props?.homeText?.about?.text;
    const headerImage = props?.homeImage?.brand?.image;
    return (
        <section className="projects-section bg-light" id="projects">
            <Container className="gx-0 mb-4 mb-lg-5 align-items-center">
                <Row className="gx-4 gx-lg-5 justify-content-center">
                    <Col xl="8" lg="7">
                        <img class="img-fluid mb-3 mb-lg-0 img-new-product" alt="..." />
                    </Col>
                </Row>
                <img className="img-fluid" src={headerImage} alt="..." />
            </Container>
        </section>
    );
}
export default Product; 