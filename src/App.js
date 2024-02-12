import './custom.css';
import NavigationBar from './components/navbar';
import Header from './pages/header';
import About from './pages/about';
import {getHomeImage, getProducts,getHomeText } from './api';
import { useEffect,useState } from 'react';

function App() {
  const [dataHomeImage, setDataHomeImage] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataHomeText, setDataHomeText] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getDataHomeImage = await getHomeImage();
      setDataHomeImage(getDataHomeImage);

      const getDataProduct = await getProducts();
      setDataProduct(getDataProduct);

      const getDataHomeText = await getHomeText();
      setDataHomeText(getDataHomeText);
    }
    fetchData()
  }, [])

  const createHomeImage = () => {
    const homeDataObject = {};
  
    dataHomeImage.data?.data.forEach(data => {
      const findData = data.attributes.image.data.attributes;
      const jenis_foto = data.attributes.jenis_foto;
  
      homeDataObject[jenis_foto] = {
        jenis_foto: jenis_foto,
        image: 'http://localhost:1337' + findData.url,
      };
    });
  
    return homeDataObject;
  }; 
  
  const createHomeText = () => {
    const homeTextObject = {};
  
    dataHomeText.data?.data.forEach(data => {
      const jenis_text = data.attributes.jenis_text;
      const text = data.attributes.text;
  
      homeTextObject[jenis_text] = {
        jenis_text: jenis_text,
        text: text,
      };
    });
  
    return homeTextObject;
  }; 

  const createDataProduct = () => {
    // const dataNewProduct = {} 
    // const dataProductArray = dataProduct.data?.data.map(data => {
    //   const findData = data.attributes;
    //   const nama_produk = findData.nama_produk;
    //   const deskripsi = findData.deskripsi;
    //   // if (findData.produk_baru == true) {
    //   //   dataNewProduct = {
    //   //     nama_produk: jenis_text,
    //   //     text: text,
    //   //   };
    //   // } else {
        
    //   // }
      // const jenis_foto = data.attributes.jenis_foto;
      // return {
      //   [jenis_foto]:{
      //     jenis_foto: jenis_foto,
      //     image: 'http://localhost:1337' + findData.url,
      //   },
      // };
      // console.log(createDataProduct());
    // });
    // return dataProductArray;
  };
  return (
    <div>
      {createDataProduct()}
      <NavigationBar/>
      <Header homeImage={createHomeImage()} homeText={createHomeText()} />
      <About homeImage={createHomeImage()} homeText={createHomeText()} />
    </div>
  );
}

export default App;
