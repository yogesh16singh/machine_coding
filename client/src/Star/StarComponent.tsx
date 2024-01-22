import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarComponent = (props: any) => {
    console.log(props);
    const [hoverRating, setHoverRating]: any = useState(null);
    return (
        <div className="flex">
            {Array.from({ length: props.StarCount }).map((_, index) => {
                return (
                    <span
                        className={

                            hoverRating == null
                                ? index < props.rating
                                    ? "text-yellow-300"
                                    : ""
                                : index < hoverRating
                                    ? "text-yellow-300"
                                    : ""
                        }
                        key={index}
                        onClick={() => props.setRating(index + 1)}
                        onMouseEnter={() => setHoverRating(index + 1)}
                        onMouseLeave={() => setHoverRating(null)}
                    >
                        <FaStar className="text-3xl" />
                    </span>
                );
            })}
        </div>
    );
};
export default StarComponent;
