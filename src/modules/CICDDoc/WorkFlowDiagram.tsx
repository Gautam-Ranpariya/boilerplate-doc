const WorkFlowDiagram = () => {
  return (
    <>
      <div className="bg-gray-900 border-2 border-dashed border-blue-500 rounded-lg p-6 my-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full font-semibold">
            Push/PR
          </div>
          <span className="text-blue-400 text-2xl">→</span>
          <div className="bg-linear-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
            Build & Lint
          </div>
          <span className="text-purple-400 text-2xl">→</span>
          <div className="bg-linear-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full font-semibold">
            Test
          </div>
          <span className="text-green-400 text-2xl">→</span>
          <div className="bg-linear-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded-full font-semibold">
            Auto-Assign
          </div>
          <span className="text-yellow-400 text-2xl">→</span>
          <div className="bg-linear-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full font-semibold">
            Review
          </div>
          <span className="text-orange-400 text-2xl">→</span>
          <div className="bg-linear-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold">
            Deploy
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkFlowDiagram;
