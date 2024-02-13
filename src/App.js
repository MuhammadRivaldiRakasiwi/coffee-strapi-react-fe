import './custom.css';
import NavigationBar from './components/navbar';
import Header from './pages/header';
import About from './pages/about';
import Contact from './pages/contact';
import {getHomeImage, getProducts,getHomeText } from './api';
import { shuffle } from './custom';
import { useEffect,useState } from 'react';
import Product from './pages/product';

function App() {
  const [dataHomeImage, setDataHomeImage] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataHomeText, setDataHomeText] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      const getDataHomeImage = await getHomeImage();
      setDataHomeImage(getDataHomeImage);

      const getDataProduct = await getProducts();
      setDataProduct(getDataProduct);

      const getDataHomeText = await getHomeText();
      setDataHomeText(getDataHomeText);
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <NavigationBar/>
      <Header homeImage={createHomeImage()} homeText={createHomeText()} />
      <About homeImage={createHomeImage()} homeText={createHomeText()} />
      <Product dataProduct={dataProduct} />
      <Contact homeImage={createHomeImage()} homeText={createHomeText()} />
      <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Your Website 2023</div></footer>
    </div>
  );
}

export default App;
