import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { productList } from "../redux/productAction";

const ProductDetailPage = () => {

    let { id } = useParams();

    console.log("Id", id) ;

   // const dispatch = useDispatch();

     // 'useSelector' to get state from redux store globally.
     const details = useSelector(state => state.productData);
     console.log("DETAIL", details);

    const test = details ?  details?.filter((item) => item.id === id) : '';
    console.log("tesst", test);


  //    // Component Did Mount
  // useEffect(() => {
  //   dispatch(productList(id));
  // }, []);


    return(
        <>
        <h1 className="mt-5 bg-light">Detail Page</h1>
        <div className="product-card">
  <div className="image-container">
    <div className="cover-image product-image">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.22NHOGduNlgOgLOnTosV3gHaHW%26pid%3DApi&f=1" alt="" />
    </div>
    <div className="more-image-container">
      <div className="more-image product-image">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1" alt="" /> 
      </div>
      <div className="more-image product-image">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F1144%2F1146947_6.jpg&f=1&nofb=1" alt="" />
      </div>
      <div className="more-image product-image">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1" alt="" />
      </div>
    </div>
  </div>
  <div className="product-info mt-5">
  
    <h3 className="product-name">{test.name}</h3>
    <p className="regular-price">1599$</p>
    <p className="discount-price">799$</p>
    <p className="offer-info">The offer is valid until April 3 or as long as stock losts!</p>
    <Link to="" className="add-to-cart mt-4">
      Add to cart
    </Link>
    <div className="stock">
      <div className="stock-status"></div>
      <p className="stock-info">50+ pcs. in stock.</p>
    </div>
  </div>
</div>
</>
    )
}
export default ProductDetailPage;
