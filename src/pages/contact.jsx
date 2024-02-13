import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Contact(props) {
    const alamat = props?.homeText?.alamat?.text;
    const email = props?.homeText?.email?.text;
    const no_hp = props?.homeText?.no_hp?.text;
    const footerImage = props?.homeImage?.footer?.image;
    return (
        <section style={{
        background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.7) 75%,
            #000 100%
        ),url(${footerImage})`, backgroundSize: footerImage && 'cover', backgroundRepeat: footerImage && 'no-repeat' }} className="contact-section bg-black">
            <Container className="px-4 px-lg-5">
                <Row className="gx-4 gx-lg-5">
                    <Col md='4' className="mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center address">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className='small text-black-50'>
                                    {alamat}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='4' className="mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center email">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className='small text-black-50'>
                                    {email}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='4' className="mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center no-hp">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className='small text-black-50'>
                                    {no_hp}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Stack gap={1} direction="horizontal" className="social justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </Stack>
            </Container>
        </section>
    );
}
export default Contact;