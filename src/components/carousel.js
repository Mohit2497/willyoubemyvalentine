import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import friends_date from '../images/friends_date.jpg';
import elephant_bracelet from '../images/elephant_bracelet.jpg';
import Sanjana_bracelet from '../images/Sanjana_bracelet.jpg';
import Sanjana_confessed from '../images/Sanjana_confessed.jpg';
import My_cutie from '../images/My_cutie.JPG';
import My_Iloveyou from '../images/My_Iloveyou.jpg';
import zootopia_us from '../images/zootopia_us.JPG';
import My_elephant from '../images/My_elephant.JPG';
import Mrs_Deshpande from '../images/Mrs_Deshpande.JPG';
import My_crazy_girl from '../images/My_crazy_girl.JPG';
import My_hottie_girlfriend from '../images/My_hottie_girlfriend.JPG';
import elephant_valentines from '../images/elephant_valentines.jpg';
import sunflower from '../images/sunflower.jpg';

/* Array of photos to cycle through */
const images = {
    friends_date: <img src={friends_date} alt="Sanjana and Mohit watching a friends episode" />,
    elephant_bracelet: <img src={elephant_bracelet} alt="Sanjana wearing an elephant bracelet" />,
    Sanjana_bracelet: <img src={Sanjana_bracelet} alt="Mohit wearing a bracelet of her name" />,
    Sanjana_confessed: <img src={Sanjana_confessed} alt="Sanjana confessing her love to Mohit" />,
    My_cutie: <img src={My_cutie} alt="Mohit's Cutie" />,
    My_Iloveyou: <img src={My_Iloveyou} alt="Mohit's Iloveyou" />,
    zootopia_us: <img src={zootopia_us} alt="Sanjana and Mohit as Zootopia characters" />,
    My_elephant: <img src={My_elephant} alt="My cute elephant" />,
    Mrs_Deshpande:<img src={Mrs_Deshpande} alt="Mrs.Deshpande" />,
    My_crazy_girl: <img src={My_crazy_girl} alt="My crazy girl" />,
    My_hottie_girlfriend: <img src={My_hottie_girlfriend} alt="My hottie girlfriend" />,
    elephant_valentines: <img src={elephant_valentines} alt="Elephant valentine" />,
    sunflower: <img src={sunflower} alt="Sunflower" />,
};

function CarouselImages() {

  const [currentIndex, setCurrentIndex] = useState(0);

  /* On effect, get a random photo index, change every 5 seconds. */
  useEffect (() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Object.keys(images).length);
      setCurrentIndex(randomIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  
  /* Enter, map, and cycle through images */
  const carouselItems = Object.entries(images).map(([key, image], index) => (
    <Carousel.Item key={key}>
      <div className="carousel">
        {image}
      </div>
    </Carousel.Item>
  ));

  return (
    <>
      <Carousel slide={false} activeIndex={currentIndex}>{carouselItems}</Carousel>
    </>
  
  )
}

export default CarouselImages;