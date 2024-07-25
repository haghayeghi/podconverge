import React from "react";
import Image from "next/image";

const ProductCard = (props: any) => {
  const price = props.product.productPrice.replace("$", "");
  const prName = props.product.productName;
  const prOff = props.product.off;
  const prTag = props.product.productTag;
  const prid = props.product.productID;

  return (
    <>
      <div key={prid} className="flex flex-col relative rounded-[17px] w-[235px] shadow-pShaddow hover:shadow-pShaddowHover transition-shadow">
        {prTag !== "" && (
          <div className="flex flex-col absolute top-4 left-[-8px]">
            <div className="content-center text-[14px] rounded-md rounded-bl-none bg-primary-300 text-Neutral-1100 p-2">{prTag}</div>
            <div className="">
              <Image src="svg/Rectangle.svg" alt="rectangle shadow" width="8" height="6" />
            </div>
          </div>
        )}

        <div className="absolute top-[18px] right-[11px] bg-Neutral-900 bg-opacity-20 h-8 w-8 blur-[12px]"></div>
        <div className="absolute top-6 right-4">
          <Image src="svg/heart.svg" alt="heart" width="21" height="19" />
        </div>

        <div className="flex w-[235px] h-[235px] bg-Neutral-500 rounded-t-[17px]">
          <img src="images/ProdImage.png" alt={prName} width="235" height="235" />
        </div>
        <div className="flex flex-col grow p-4 rounded-b-[17px] border-[0.5px] border-Neutral-500">
          <div className="px-2 flex flex-col grow">
            <div className=" font-semibold text-[16px] text-Character-title text-opacity-85">{props.product.productName}</div>
          </div>
          <div className="px-2 py-2 font-normal text-[14px] text-Character-title text-opacity-45">{props.product.productColor}</div>
          <div>
            <hr className=" border-Neutral-500 " />
          </div>
          <div className="flex py-4 px-2 justify-around content-stretch">
            <div className="pr-2  content-center">
              <Image src="svg/Trophy.svg" alt="Trophy Icon" width="14" height="14" />
            </div>
            <div className="grow font-normal text-[14px] text-Character-title text-opacity-85">Best available price</div>
            <div className="content-center pt-1">
              <Image src="svg/ArrowDown.svg" alt="ArrowDown" width="16" height="16" />
            </div>
          </div>

          <div className="flex py-1 px-2 justify-around content-stretch">
            <div className="pr-2  content-center">
              <Image src="svg/Printify-logo.svg" alt="Printify Logo" width="13" height="20" />
            </div>
            <div className="grow font-normal content-center text-[14px] text-Character-title text-opacity-85">Printify</div>
            {prOff !== "0" && <div className="content-center text-[12px] rounded-full bg-[#FF4D4F] text-Neutral-100 px-2">{prOff}% OFF</div>}
          </div>

          <div className="flex pt-1 pb-4 px-2 justify-around content-stretch">
            <div className="pr-2  content-center">
              <Image src="svg/local_shipping.svg" alt="Shipping Icon" width="14" height="14" />
            </div>
            <div className="grow font-semibold content-center text-[16px] text-Character-title text-opacity-85">{price} CAD</div>
          </div>

          <div>
            <hr className=" border-Neutral-500 " />
          </div>

          <div className="flex pt-4 pb-4 px-2 justify-around content-stretch">
            <div className="pr-2  content-center">
              <Image src="svg/plus.svg" alt="Plus Icon" width="14" height="14" />
            </div>
            <div className="grow font-normal content-center text-[14px] text-Character-title text-opacity-85">Also provided by</div>
          </div>

          <div className="flex px-2 justify-around content-stretch">
            <div className="pr-2  content-center">
              <Image src="svg/Moo-logo.svg" alt="Moo Logo" width="26" height="26" />
            </div>
            <div className="pr-2  content-center">
              <Image src="svg/Gelato-logo.svg" alt="Gelato Logo" width="26" height="26" />
            </div>
            <div className="pr-2  content-center">
              <Image src="svg/Printful-logo.svg" alt="Printful Logo" width="36" height="16" />
            </div>
            <div className="grow font-normal content-center text-[14px] text-Character-title text-opacity-45 ">+3 more</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
