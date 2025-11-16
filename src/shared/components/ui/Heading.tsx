const Heading = ({ title }: { title: string }) => {
  return (
    <div
      className="flex items-center p-3 sm:p-4 rounded bg-gray-50 shadow-md my-2"
      aria-label="Heading"
    >
      <p className="text-purple-600 text-lg font-bold leading-7 text-center w-full ">
        {title}
      </p>
    </div>
  );
};

export default Heading;
