import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Header(props) {
    const headerText = props?.homeText?.slogan?.text;
    const headerImage = props?.homeImage?.header?.image;
    return (
        <header style={{ padding:'15rem 0',
        background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.7) 75%,
            #000 100%
        ),url(${headerImage})`, backgroundSize: headerImage && 'cover', backgroundRepeat: headerImage && 'no-repeat' }} className='masthead'>
            <Container px='4'className='px-lg-5 h-100 align-items-center justify-content-center'>
                <Stack gap={3} className='mx-auto text-center'>
                    <h1 className="mx-auto my-0 text-uppercase">COFFEE</h1>
                    <h2 className='text-white-50 mx-auto mt-2 mb-5'>{headerText}</h2>
                    <div className="button">
                        <Button variant="primary" href="#about" className='w-25'>Get Started</Button>
                    </div>
                </Stack>
            </Container>
        </header>
    );
}
export default Header; 