import PRODUCTS from "./components/products";
import HERO from "./components/hero";
import Sale from "./components/sale";
import LatestProduct from "./components/LatestProduct";
import Brands from "./components/brands";
import DiscoverMore from "./components/Discovermore";
import Topseler from "./components/topsealler";
import LikeProduct from "./components/likeproduct";
import InfoBar from "./components/service";

function HOME() {

  return ( 
    <div>
      <HERO/>
      <PRODUCTS/>
      <Sale/>
      <LatestProduct/>\
      <Brands/>
      <DiscoverMore/>
      <Topseler/>
      <LikeProduct/>
      <InfoBar/>
    </div>
   );
}

export default HOME;