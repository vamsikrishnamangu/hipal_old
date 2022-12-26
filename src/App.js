import { BrowserRouter,Route, Routes } from 'react-router-dom';
//import { ReactDOM } from 'react';
import Explore from './Components/ExplorePage/ExplorePage';
import './App.css';
import MenuPage from './Components/MenuPage/MenuPage';
import CategoryTilePage from './Components/Category_Tile_Page/CategoryTilePage';
import CategoryListPage from './Components/Category_List_Page/CategoryListPage';
import ProductPage from './Components/ProductPage/ProductPage';
import PortionPage from './Components/PortionPage/PortionPage';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import FinalCartPage from './Components/FinalCartPage/FinalCartPage';
import SmartSuggestor from './Components/SmartSuggestor/SmartSuggestor';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.scss';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/HIPAL/" element={<Explore/>}/>
      <Route exact path="/HIPAL/menu/" element={<MenuPage/>}/>
      <Route exact path="/HIPAL/category/" element={<CategoryTilePage/>}/>
      <Route exact path="/HIPAL/category_list/" element={<CategoryListPage/>}/>
      <Route exact path="/HIPAL/product/" element={<ProductPage/>}/>
      <Route exact path="/HIPAL/portion/" element={<PortionPage/>}/>
      <Route exact path="/HIPAL/final/" element={<FinalCartPage/>}/>
      <Route exact path="/HIPAL/smart_suggestor/" element={<SmartSuggestor/>}/>
      <Route exact path="/HIPAL/review" element={<ReviewPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

      <Explore />
      <MenuPage /> 
      <CategoryTilePage/>
      <CategoryListPage/>
      <ProductPage/>
      <PortionPage/>
      <ReviewPage />
      <FinalCartPage />
      <SmartSuggestor />
*/
