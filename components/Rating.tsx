interface RatingProps {
    rating: number;
  }
  
  export const Rating = ({ rating }: RatingProps) => {
    //przed destrukturyzacją: (props: RatingProps)
    return <div className="text-black-500 font-bold">{rating}</div>; //przed destrukturyzacją: {props.rating}
  };