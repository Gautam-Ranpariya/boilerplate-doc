import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import ZapIcon from "@components/icons/ZapIcon";
import { BestSectionMenu } from "@data/test-case-doc";

const BestSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <BadgeCheckIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Best Practices</h2>
        </div>

        <div className="space-y-4">
          {BestSectionMenu &&
            BestSectionMenu.map((practice, idx) => {
              return (
                <div
                  key={idx}
                  className={`bg-gray-900 border border-${practice.color}-500 rounded-lg p-5 hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start space-x-4">
                    {practice.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {practice.title}
                      </h3>
                      <p className="text-gray-400">{practice.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="bg-linear-to-r from-green-900 to-teal-900 p-6 rounded-lg border border-green-500">
          <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
            <ZapIcon className="text-yellow-400" />
            <span>Pro Tips</span>
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              • Start with simple unit tests before complex integration tests
            </li>
            <li>• Aim for meaningful coverage, not just high percentages</li>
            <li>• Keep tests fast by mocking heavy operations</li>
            <li>• Write tests before fixing bugs (TDD approach)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BestSection;
