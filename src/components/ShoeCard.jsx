import React from "react";

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
    const handleClick = () => {
        changeBigShoeImage(imgURL.bigShoe); // Always change the big shoe image on click
    };

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="shoe" height={103} className="object-contain" />
            </div>
        </div>
    );
}

export default ShoeCard;
