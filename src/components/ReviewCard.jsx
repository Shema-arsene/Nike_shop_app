import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, rating, feedback, customerName }) => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div>
        <img
          src={imgURL}
          alt="Customer"
          width={120}
          height={120}
          className="rounded-full object-cover m-auto"
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img
            src={star}
            alt="Star"
            width={20}
            height={20}
            className="object-contain m-0"
          />
          <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
          {customerName}
        </h3>
      </div>
    </section>
  )
}

export default ReviewCard
