"use client";

import Image from "next/image";

const Glimpses = () => {
  return (
    <section className="relative h-auto py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="relative bg-white z-10 max-w-full mx-auto text-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            className="absolute top-0 -z-10 w-28 h-28 sm:w-28 sm:h-28 md:w-36 md:h-36"
            src={"/claylab assets/general/circle1.svg"}
            height={220}
            width={220}
            alt={"bg image graphics"}
          />
          <Image
            className="absolute top-32 right-10 z-0 w-36 h-30 sm:w-36 sm:h-36"
            src={"/claylab assets/general/circle2.svg"}
            height={224}
            width={224}
            alt={"bg image graphics"}
          />
          <Image
            className="absolute bottom-72 left-96 z-0 w-36 h-30 sm:w-36 sm:h-36"
            src={"/claylab assets/general/circle2.svg"}
            height={224}
            width={224}
            alt={"bg image graphics"}
          />
          <Image
            className="absolute -bottom-16 -right-14 z-0 w-36 h-30 sm:w-36 sm:h-36"
            src={"/claylab assets/general/circle2.svg"}
            height={224}
            width={224}
            alt={"bg image graphics"}
          />
        </div>
        {/* Header Section */}
        <div className="text-center pt-9">
          <h3 className="font-hendrigo text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl mb-0 sm:mb-0">
            Glimpses of the Events
          </h3>

          {/* Decorative Underline */}
          <div className="flex justify-center">
            <Image
              src="/claylab assets/general/brushGlimpse.png"
              height={16}
              width={640}
              className="w-72 sm:w-80 md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto"
              alt="decorative underline"
            />
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-16 px-2 sm:px-4 md:px-12">
          {/* Large Image Left (spans 2 cols and 3 rows on large screens) */}
          <div className="relative min-h-[250px] lg:min-h-[300px] rounded-xl overflow-hidden lg:col-span-2 lg:row-span-3">
            <Image
              src="/claylab assets/workshop/glimpse1.png"
              alt="Glimpse 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Tall image right */}
          <div className="relative min-h-[250px] lg:min-h-[300px] rounded-xl overflow-hidden lg:row-span-3">
            <Image
              src="/claylab assets/workshop/glimpse2.png"
              alt="Glimpse 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Lower left image */}
          <div className="relative min-h-[250px] lg:min-h-[300px] rounded-xl overflow-hidden lg:row-start-4">
            <Image
              src="/claylab assets/workshop/glimpse4.png"
              alt="Glimpse 4"
              fill
              className="object-cover"
            />
          </div>

          {/* Lower right (wide) image */}
          <div className="relative min-h-[250px] lg:min-h-[300px] rounded-xl overflow-hidden lg:col-span-2 lg:row-start-4">
            <Image
              src="/claylab assets/workshop/glimpse3.png"
              alt="Glimpse 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpses;
