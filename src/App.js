import { BrowserRouter,Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/hipal/" element={<Explore/>}/>
      <Route exact path="/hipal/menu/" element={<MenuPage/>}/>
      <Route exact path="/hipal/category/" element={<CategoryTilePage/>}/>
      <Route exact path="/hipal/category_list/" element={<CategoryListPage/>}/>
      <Route exact path="/hipal/product/" element={<ProductPage/>}/>
      <Route exact path="/hipal/portion/" element={<PortionPage/>}/>
      <Route exact path="/hipal/final/" element={<FinalCartPage/>}/>
      <Route exact path="/hipal/smart_suggestor/" element={<SmartSuggestor/>}/>
      <Route exact path="/hipal/review" element={<ReviewPage/>}/>
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
