import { useEffect } from "react";
import MainSlider from "../layout/MainSlider";

function HomePage () {
  useEffect( () => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      Home Page
      <MainSlider />
    </div>
  )
}

export default HomePage;