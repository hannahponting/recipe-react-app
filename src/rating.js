import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import { PostRating } from "./utils";

const Rate = (props) => {
    const [rate, setRate] = useState(0);

    const handleButtonClick = () => {
        PostRating(props.id, rate);
    }

    return (
        <div>
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
          <button onClick={handleButtonClick}>Enter</button>
      </div>
    );
};

 
export default Rate;