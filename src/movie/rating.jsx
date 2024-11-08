import star from "../assets/star.svg";
export default function Rating({ value }) {
  const ratingValue = Array(value).fill(star);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {ratingValue.map((star,index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </div>
  );
}
