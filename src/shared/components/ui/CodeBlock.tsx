import CheckIcon from "@components/icons/CheckIcon";
import CopyIcon from "@components/icons/CopyIcon";
import { setCopiedCode } from "@lib/redux/slices/common";
import { AppDispatch, RootState } from "@lib/redux/store";
import { useDispatch, useSelector } from "react-redux";

const CodeBlock = ({ code, language, id }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { copiedCode } = useSelector((state: RootState) => state.layout);

  // handle copy
  const handleCopy = (code : string, id: string) => {
    navigator.clipboard.writeText(code);
    dispatch(setCopiedCode(id));
    setTimeout(() => dispatch(setCopiedCode("")), 2000);
  };

  return (
    <>
      <div className="relative group">
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={() => handleCopy(code, id)}
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded transition-colors"
          >
            {copiedCode === id ? (
              <CheckIcon width={16} height={16} />
            ) : (
              <CopyIcon width={16} height={16} />
            )}
          </button>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </>
  );
};

export default CodeBlock;
