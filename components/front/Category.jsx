import React from "react";
import Image from "next/image";

function Category() {
  return (
    <div className="w-full bg-[#232321] relative">
      <div className="min-h-[60vh] lg:min-h-[75vh] container m-auto text-[#FAFAFA]">
        <h1 className="font-bold text-[25px] md:text-[60px] p-2 uppercase">
          Cateogories
        </h1>
      </div>
      <div className="max-w-full gap-10 w-[95%] min-h-[40vh] items-center sm:h-[50vh] justify-center md:justify-evenly md:min-h-[45vh] lg:min-h-[55vh] rounded-tl-[50px]  flex md:flex-row flex-col bg-[#FAFAFA] absolute bottom-0 right-0">
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="h-[200px] max-w-[200px] sm:h-[200px] md:min-w-[400px] md:h-[500px]">
            <Image
              height={1000}
              width={1000}
              src="/shoes/nike.png"
              alt="nike"
              className="object-contain h-full lg:object-cover"
            />
          </div>
          <h1 className="font-bold text-[16px] sm:text-[25px] md:text-[30px] absolute uppercase bottom-0 md:bottom-0 w-32 left-2 md:left-5 text-[#232321]">
            Basketball shoes
          </h1>
        </div>
        <div className="relative flex items-center justify-center w-full h-full ">
          <div className="h-[200px] w-[200px] sm:h-[200px] md:min-w-[400px] md:h-[500px]">
            <Image
              src="/shoes/jordan.png"
              alt="jordan"
              height={1000}
              width={1000}
              className="object-contain w-full h-full lg:object-cover"
            />
          </div>
          <h1 className="absolute bottom-0  w-32 left-2 md:left-5 font-bold uppercase text-[16px] sm:text-[25px] md:text-[30px]  text-[#232321]">
            Lifestyle shoes
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Category;
