const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 animate-fade-in">
        Welcome to <span className="text-blue-600">EmployLink</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">
        Discover your next opportunity or post your job openings with ease.
      </p>
      <a
        href="/jobs"
        className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        🚀 Explore Jobs
      </a>
    </section>
  );
};

export default Home;
