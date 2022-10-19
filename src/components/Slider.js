import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=2000" },
  { url: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604__340.jpg" },
  { url: "https://content3.jdmagicbox.com/comp/def_content/jeans-retailers/shutterstock-623427224-jeans-retailers-17-8etg1.jpg?clr=1c1c4a" },
  { url: "https://cdn.dribbble.com/users/339375/screenshots/16417180/media/a2918bb01a800f8e1be6ca3599228b7a.png?compress=1&resize=400x300" },
  { url: "https://img.freepik.com/free-vector/ecommerce-email-template_23-2148717009.jpg?w=2000" },
  { url: "https://cdn.dribbble.com/users/110372/screenshots/5368718/furniture_shop_animation_concept_still_2x.gif?compress=1&resize=400x300" },
  { url: "https://www.iwmbuzz.com/wp-content/uploads/2022/10/jimin-to-r-m-bts-boys-favorite-clothing-brand-7.jpg" },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1830}
        height={604}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={3}
      />
    </div>
  );
}
export default Slider;