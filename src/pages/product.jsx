import Container from 'react-bootstrap/Container';
import {shuffle } from '../custom';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product(props) {
    const { dataProduct } = props;
    const [dataNewProduct, setDataNewProduct] = useState({});
    const [dataListProduct, setDataListProduct] = useState([]);  

    const filterProduct = () => {
        dataProduct.data?.data.map((data) => {
            const findData = data.attributes;
            const nama_produk = findData.nama_produk;
            const foto = shuffle(data.attributes.image.data);
            const deskripsi = findData.deskripsi;

            if (findData.produk_baru === true) {
                setDataNewProduct({
                    nama_produk: nama_produk,
                    deskripsi: deskripsi,
                    image: 'http://localhost:1337' + foto[0].attributes.url,
                });
            }
        });

        const dataList = dataProduct.data?.data.map((data) => {
            const findData = data.attributes;
            const nama_produk = findData.nama_produk;
            const foto = shuffle(data.attributes.image.data);
            const deskripsi = findData.deskripsi;
            
            const product = {
                nama_produk: nama_produk,
                deskripsi: deskripsi,
                produk_baru: findData.produk_baru,
                image: 'http://localhost:1337' + foto[0].attributes.url,
            }

            return product
        });

        setDataListProduct(dataList);
    };

    const ListProduct = () => {
        return dataListProduct?.map((data, i) => {
            if (data.produk_baru != true) {
                if ((i + 1) % 2 === 0) {
                    return (
                        <Row className='gx-0 justify-content-center' key={i}>
                            <Col lg='6'>
                                <img className="img-fluid" src={data.image} alt="..." />
                            </Col>
                            <Col lg= '6' className='order-lg-first'>
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-right">
                                            <h4 className="text-white" style={{textTransform: "capitalize"}}>{data.nama_produk}</h4>
                                            <p className="mb-0 text-white-50" style={{wordWrap: "break-word"}}>{data.deskripsi}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )
                }else{
                    return (
                        <Row className='gx-0 mb-5 mb-lg-0 justify-content-center' key={i}>
                            <Col lg='6'>
                                <img className="img-fluid" src={data.image} alt="..." />
                            </Col>
                            <Col lg= '6'>
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white" style={{textTransform:'capitalize'}}>{data.nama_produk}</h4>
                                            <p className="mb-0 text-white-50" style={{wordWrap: "break-word"}}>{data.deskripsi}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )
                }
            }
        })
    }

    useEffect(() => {
        filterProduct()
    }, [dataProduct])
    console.log(dataListProduct);
    return (
        <section className="projects-section bg-light" id="projects">
            <Container className="px-4 px-lg-5">
                <Row className='gx-0 mb-4 mb-lg-5 align-items-center'>
                    <Col xl='8' lg='7'>
                        <img className="img-fluid mb-3 mb-lg-0 img-new-product" src={dataNewProduct.image} alt="..." />
                    </Col>
                    <Col xl='4' lg='5'>
                        <div className="featured-text new-product-desc text-center text-lg-left">
                            <h4>{dataNewProduct.nama_produk}</h4>
                            <p className="text-black-50 mb-0">{dataNewProduct.deskripsi}</p>
                        </div>
                    </Col>
                </Row>
                <div className="product-list">
                    <ListProduct />
                </div>
            </Container>
        </section>
    );
}
export default Product; 