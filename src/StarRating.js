import './StarRating.css';
import { GetRatingById } from './utils';

const StarRating = (props) => {
  let rating = GetRatingById(props.recipeId);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 > 0.5;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <img src={require('./fullstar.png')} className='star'></img>
    } else if (hasHalfStar && index === fullStars) {
      return (
          <img src={require('./halfstar.png')} className='star'></img>
      );
    }
    else{
        return(
            <img src={require('./greystar.png')} className='star'></img>
        )
    }
  });

  return <div className="star-container">{stars}<p className='font'></p> </div>;
};

export default StarRating;