import './StarRating.css';
import { GetRatingById } from '../../utils';

const StarRating = (props) => {
  let rating = props.stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 > 0.5;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <img src={require('../../Resources/fullstar.png')} className='star' key={index}></img>
    } else if (hasHalfStar && index === fullStars) {
      return (
          <img src={require('../../Resources/halfstar.png')} className='star' key={index}></img>
      );
    }
    else{
        return(
            <img src={require('../../Resources/greystar.png')} className='star'key={index}></img>
        )
    }
  });

  return <div className="star-container">{stars}<p className='font'></p> </div>;
};

export default StarRating;