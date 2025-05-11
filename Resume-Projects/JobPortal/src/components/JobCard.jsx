import { HiLocationMarker } from "react-icons/hi";

const JobCard = ({ title, company, location, logo }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4">
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-14 h-14 object-contain rounded-md border"
      />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">
          <HiLocationMarker className="text-red-500 mr-1 w-4 h-4" />
          {location}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
