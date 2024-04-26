import Image from "next/image";
import React, { FC } from "react";

interface IEmptyContent {
  image?: string;
  title?: string;
  description?: string;
}

const EmptyContent: FC<IEmptyContent> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-2 text-center mt-14">
      {image && (
        <div className="image">
          <Image src={image} width={128} height={128} alt="home" />
        </div>
      )}
      {title && <h2 className="text-[#333333] text-sm font-bold">{title}</h2>}
      {description && <p className=" text-xs text-[#a2a2a2]">{description}</p>}
    </div>
  );
};

export default EmptyContent;
