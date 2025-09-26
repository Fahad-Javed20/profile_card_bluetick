type CardProps = {
  image: string;
  name: string;
  role: string;
  verified: boolean;
};

const Card = ({ image, name, role, verified }: CardProps) => {
  return (
    <div className="bg-white h-48 w-96 shadow-lg/30 rounded-3xl grid grid-cols-2">
      <div className="flex items-center justify-center relative">
        <img className="size-28 rounded-full" src={image} alt="Picture of Person" />
       
      {verified && (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-12 rounded-full text-blue-800 relative  top-6 right-7 bg-white"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
    />
  </svg>
)}


      </div>
      <div className="flex flex-col justify-center -ml-15">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h1 className="text-1xl text-gray-600">{role}</h1>
      </div>
    </div>
  );
};

export default Card;
