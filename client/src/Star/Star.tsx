import { useState } from "react";
import StarComponent from "./StarComponent";

const Star = () => {
    const [rating, setRating] = useState(3);
    return (
        <div className=" mt-8 gap-3 flex  flex-col items-center">
            <h1 className="bg-black text-white p-2 m-2 rounded">Star Rating</h1>
            <StarComponent
                rating={rating}
                setRating={setRating}
                StarCount={5}
            ></StarComponent>
        </div>
    );
};
export default Star;
