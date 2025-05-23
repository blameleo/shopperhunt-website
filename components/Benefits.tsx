import Slider from "./Slider";
import { Button } from "./ui/Button";

function Benefits() {
  return (
    <div className="lg:mx-[3em] px-[1em] py-12 md:py-20">
      <div className="flex pb-6 sm:pb-10">
        <h1 className="bg-black text-white font-semibold text-xl sm:text-2xl md:text-[28px] px-3 sm:px-5 py-2 rounded-[12px]">
          The Benefits Ahead
        </h1>
      </div>

      {/** slisder one */}
      <main className="w-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-14 ">
        {/* <div className="flex-1">
          <Slider />

          <h1 className="mt-6 sm:mt-8 md:mt-10 font-semibold text-2xl sm:text-3xl md:text-[34px]">Vendor Benefits</h1>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-3">
            <p className="text-base sm:text-lg font-medium">
              Display a catalog of products. <br className="hidden sm:block" /> Increase online presence.{" "}
            </p>

            <Button variant={"primary"} className="self-start sm:self-auto">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <Slider />

          <h1 className="mt-6 sm:mt-8 md:mt-10 font-semibold text-2xl sm:text-3xl md:text-[34px]">Shopper Benefits</h1>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-3">
            <p className="text-base sm:text-lg font-medium">
              Save time and money by discovering <br className="hidden sm:block" /> offers and items at nearby stores.{" "}
            </p>

            <Button variant="primary" className="self-start sm:self-auto">
              Learn More
            </Button>
          </div>
        </div> */}

        <div className="">
          <Slider />
          <h1 className="mt-6 sm:mt-8 md:mt-10 font-semibold text-2xl sm:text-3xl md:text-[34px]">
            Vendor Benefits
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-3">
            <p className="text-base sm:text-lg font-medium">
              Display a catalog of products. <br className="hidden sm:block" />{" "}
              Increase online presence.{" "}
            </p>

            <Button variant={"primary"} className="self-start sm:self-auto">
              Learn More
            </Button>
          </div>
        </div>

        <div>
          <Slider />
          <h1 className="mt-6 sm:mt-8 md:mt-10 font-semibold text-2xl sm:text-3xl md:text-[34px]">
            Shopper Benefits
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-3">
            <p className="text-base sm:text-lg font-medium">
              Save time and money by discovering{" "}
              <br className="hidden sm:block" /> offers and items at nearby
              stores.{" "}
            </p>

            <Button variant="primary" className="self-start sm:self-auto">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Benefits;
