import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import CircleAlertIcon from "@components/icons/CircleAlertIcon";
import { TrobleShootMenuData } from "@data/test-case-doc";

const TrobleShootSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <CircleAlertIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Troubleshooting</h2>
        </div>

        <div className="space-y-4">
          {TrobleShootMenuData &&
            TrobleShootMenuData.map((item: TestCase.ITrobleshootItem, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-red-500 rounded-lg p-5"
              >
                <div className="flex items-start space-x-3">
                  <CircleAlertIcon
                    className="text-red-400 shrink-0 mt-1"
                    width={20}
                    height={20}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-400 mb-2">
                      Issue: {item.issue}
                    </h3>
                    <div className="flex items-start space-x-2">
                      <BadgeCheckIcon
                        className="text-green-400 shrink-0 mt-1"
                        width={16}
                        height={16}
                      />
                      <p className="text-gray-300">Solution: {item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">
            Need More Help?
          </h3>
          <p className="text-gray-300 mb-3">Check out these resources:</p>
          <ul className="space-y-2 text-gray-300">
            <li>
              •{" "}
              <a
                href="https://jestjs.io/docs/getting-started"
                className="text-blue-400 hover:underline"
              >
                Jest Official Documentation
              </a>
            </li>
            <li>
              •{" "}
              <a
                href="https://testing-library.com/docs/"
                className="text-blue-400 hover:underline"
              >
                Testing Library Documentation
              </a>
            </li>
            <li>• Review existing tests in the boilerplate for examples</li>
            <li>• Reach out to the development team</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrobleShootSection;
