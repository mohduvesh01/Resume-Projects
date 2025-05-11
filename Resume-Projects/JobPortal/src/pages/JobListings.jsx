import { TiLocation } from "react-icons/ti";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    image: "https://logo.clearbit.com/netlify.com",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudCore",
    location: "New York, USA",
    type: "Part-time",
    image: "https://logo.clearbit.com/vercel.com",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Designify",
    location: "Bangalore, India",
    type: "Freelance",
    image: "https://logo.clearbit.com/figma.com",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "CodeWave",
    location: "San Francisco, USA",
    type: "Full-time",
    image: "https://logo.clearbit.com/github.com",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "InnoData",
    location: "London, UK",
    type: "Full-time",
    image: "https://logo.clearbit.com/kaggle.com",
  },
  {
    id: 6,
    title: "Digital Marketer",
    company: "MarketHype",
    location: "Delhi, India",
    type: "Part-time",
    image: "https://logo.clearbit.com/mailchimp.com",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudOps",
    location: "Berlin, Germany",
    type: "Remote",
    image: "https://logo.clearbit.com/docker.com",
  },
  {
    id: 8,
    title: "Mobile App Developer",
    company: "AppNest",
    location: "Toronto, Canada",
    type: "Full-time",
    image: "https://logo.clearbit.com/flutter.dev",
  },
  {
    id: 9,
    title: "AI/ML Engineer",
    company: "SmartMind",
    location: "Remote",
    type: "Contract",
    image: "https://logo.clearbit.com/openai.com",
  },
  {
    id: 10,
    title: "Project Manager",
    company: "AgileCorp",
    location: "Sydney, Australia",
    type: "Full-time",
    image: "https://logo.clearbit.com/atlassian.com",
  },
];

const Jobs = () => {
  return (
    <section className="px-4 py-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Browse Job Openings
        </h2>

        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search job title or company..."
            className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Company Logo */}
              <img
                src={job.image}
                alt={`${job.company} logo`}
                className="w-12 h-12 mb-3 rounded-full object-cover"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <TiLocation className="text-red-500 w-4 h-4 mr-1" />
                {job.location}
              </div>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                {job.type}
              </span>
              <a
                href="#"
                className="block mt-4 text-blue-600 hover:underline text-sm"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
