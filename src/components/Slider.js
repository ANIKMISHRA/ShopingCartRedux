import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=2000" },
  { url: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604__340.jpg" },
  { url: "https://assets.materialup.com/uploads/48e9f394-2d87-4e5c-8a97-a196355113c1/preview.jpg" },
  { url: "https://images01.nicepagecdn.com/page/10/99/website-template-preview-109962.jpg" },
  { url: "https://img.freepik.com/free-vector/ecommerce-email-template_23-2148717009.jpg?w=2000" },
  { url: "https://secureservercdn.net/198.71.189.51/spd.93a.myftpupload.com/wp-content/uploads/2020/01/10-Advantages-of-Online-Shopping.jpg?time=1661309810" },
  { url: "https://realkart.in/images/home/slide-2.jpg" },
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