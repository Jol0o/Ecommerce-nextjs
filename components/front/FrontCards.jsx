"use client";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function FrontCards() {
  const [product, setProduct] = useState([]);
  const productCollectionRef = collection(db, "products");

  const getProduct = async () => {
    try {
      const data = await getDocs(productCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="w-full p-2 my-10 md:p-0">
      <div className="container min-h-[30vh] m-auto">
        <div className="flex items-center justify-between md:items-end">
          <h1 className="text-[25px] sm:text-[30px] md:text-[75px] md:w-[650px] sm:w-[300px] font-bold leading-none uppercase w-[200px]">
            Don't miss out new drops
          </h1>
          <button className="h-10 md:px-3 text-[#FAFAFA] text-sm rounded-md px-1 font-semibold uppercase bg-blue-500 min-w-32">
            Show new drops
          </button>
        </div>
        <div className="grid items-center justify-center w-full gap-2 my-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center  md:gap-4">
          {product.slice(0, 4).map((item) => {
            return (
              <Link href="/product">
                <div className="h-[400px] mt-3 md:mt-0 md:h-[500px] w-[300px] md:w-[310px] flex flex-col items-center ">
                  <div className="relative w-full rounded-lg h-1/2 ">
                    <Image
                      src={item.image[0]}
                      alt={item.name}
                      height={1000}
                      width={1000}
                      className="object-contain bg-gray-100 rounded-lg min-h-[350px]"
                    />
                  </div>
                  <div className="flex flex-col w-full my-4 text-clip">
                    <h1 className="text-xl min-h-[70px] justify-self-center font-bold md:text-[25px]">
                      {item.name}
                    </h1>
                    <button className="bg-[#232321] rounded-md md:py-3 md:text-md text-[#FAFAFA] py-2 px-3 text-sm font-semibold">
                      View Product -
                      <span className="text-orange-400">
                        {item.price.toLocaleString()}
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FrontCards;
