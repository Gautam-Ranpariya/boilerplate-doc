import CheckIcon from "@components/icons/CheckIcon";
import CopyIcon from "@components/icons/CopyIcon";
import TerminalIcon from "@components/icons/TerminalIcon";
import { testCaseDocCommands } from "@data/test-case-doc";
import { setCopiedCode } from "@lib/redux/slices/common";
import { AppDispatch, RootState } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";

const CommandSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { copiedCode } = useSelector((state: RootState) => state.layout);

  // handle copy
  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    dispatch(setCopiedCode(id));
    setTimeout(() => dispatch(setCopiedCode("")), 2000);
  };
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <TerminalIcon className="text-yellow-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Common Commands</h2>
        </div>

        <div className="grid gap-4">
          {testCaseDocCommands && testCaseDocCommands.map((item : TestCase.ITestCaseDocCommand, idx : number) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-yellow-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <code className="text-yellow-400 font-mono text-sm">
                  {item.cmd}
                </code>
                <button
                  onClick={() => handleCopy(item.cmd, `cmd-${idx}`)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === `cmd-${idx}` ? (
                    <CheckIcon width={16} height={16} />
                  ) : (
                    <CopyIcon width={16} height={16} />
                  )}
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-purple-900 to-pink-900 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Understanding Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-purple-300">Statements:</span>
              <p className="text-gray-300">Percentage of statements executed</p>
            </div>
            <div>
              <span className="font-semibold text-pink-300">Branches:</span>
              <p className="text-gray-300">
                Percentage of control branches executed
              </p>
            </div>
            <div>
              <span className="font-semibold text-blue-300">Functions:</span>
              <p className="text-gray-300">Percentage of functions called</p>
            </div>
            <div>
              <span className="font-semibold text-green-300">Lines:</span>
              <p className="text-gray-300">Percentage of lines executed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandSection;
