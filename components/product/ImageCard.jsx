import Image from "next/image";
import React from "react";

function ImageCard({ image }) {

  return (
    <div className="grid w-full grid-cols-2 gap-2 lg:w-1/2">
      {image.map((item) => {
        return (
          <Image
            key={item}
            src={item}
            alt="shoes"
            width={400}
            height={400}
            quality={100}
            className="rounded-[30px] fit-content"
          />
        );
      })}
    </div>
  );
}

export default ImageCard;
