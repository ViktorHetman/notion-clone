import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full dark:bg-[#1F1F1F]">
      <div className="flex items-center">
        <div
          className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]
        md:h-[400px] md:w-[400px]"
        >
          <Image
            src="/documents.png"
            alt="Hero Image"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-white.png"
            alt="Hero Image"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png"
            alt="Hero Reading Image"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-white.png"
            alt="Hero Reading Image"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
