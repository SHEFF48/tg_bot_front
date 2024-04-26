import Image from "next/image";
import React, { FC, Suspense } from "react";
import SkeletonCustom from "./Skeleton";

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
          <Suspense fallback={<SkeletonCustom variant="image" />}>
            <Image src={image} width={128} height={128} alt="home" />
          </Suspense>
        </div>
      )}
      {title && <h2 className="text-main-black text-sm font-bold">{title}</h2>}
      {description && <p className=" text-xs text-main-gray">{description}</p>}
    </div>
  );
};

export default EmptyContent;
