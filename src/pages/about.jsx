import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
    const headerText = props?.homeText?.about?.text;
    const headerImage = props?.homeImage?.brand?.image;
    return (
        <section className="about-section text-center" id="about">
            <Container className="px-4 px-lg-5">
                <Row className="gx-4 gx-lg-5 justify-content-center">
                    <Col lg="8">
                        <h2 className="text-white mb-4">Take Your Coffee</h2>
                        <p className="text-white-50">{headerText}</p>
                    </Col>
                </Row>
                <img className="img-fluid" src={headerImage} alt="..." />
            </Container>
        </section>
    );
}
export default About; 