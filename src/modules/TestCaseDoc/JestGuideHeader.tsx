import ZapIcon from "@components/icons/ZapIcon";

const JestGuideHeader = () => {
  return (
    <>
      <header className="bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-blue-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <ZapIcon className="text-white" width={28} height={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Jest Integration Guide
                </h1>
                <p className="text-sm text-gray-400">
                  Complete testing setup for your project
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default JestGuideHeader;
