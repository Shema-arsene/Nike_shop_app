import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex flex-col justify-start gap-2.5">
        <div className="flex">
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="mr-2"
          />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            ({rating})
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  )
}

export default PopularProductCard
