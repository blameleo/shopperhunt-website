import Slider from "./Slider"
import { Button } from "./ui/Button"

function Benefits() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[10em] pt-16 sm:pt-20 md:pt-28 pb-10">
      <div className="flex pb-6 sm:pb-10">
        <h1 className="bg-black text-white font-semibold text-xl sm:text-2xl md:text-[28px] px-3 sm:px-5 py-2 rounded-[12px]">
          The Benefits Ahead
        </h1>
      </div>

      {/** slider one */}
      <main className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 justify-between">
        <div className="flex-1">
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
        </div>
      </main>
    </div>
  )
}

export default Benefits
