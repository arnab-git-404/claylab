import Image from "next/image";
import Heading from "../heading";

const WhyWeExist = () => {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8">
      <div className="max-w-full sm:max-w-xl mb-4 md:mb-0">
        <Heading text="Why we exist?" />
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-800">
          <strong>Guiding youth</strong> through <strong>one-on-one mentorship</strong> and real-world skills.{" "}
          <strong>Claylab</strong> exists to bridge this gap and empower youth to become informed,
          confident, and capable leaders.
        </p>
      </div>
      <div className="relative w-full flex justify-center items-center">
  
  <Image
    src="/claylab assets/general/circleGraphics.png"
    alt="abstract shape"
    width={700}
    height={240}
    className="w-[80%] h-auto object-contain"
  />

  <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <p className="text-center text-base sm:text-xl md:text-2xl text-gray-700">
      “3,000+ students supported<br /> over the past 3 years”
    </p>
  </div>
</div>

    </section>
  );
};

export default WhyWeExist;
