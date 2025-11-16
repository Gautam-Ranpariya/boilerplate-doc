import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import UsersIcon from "@components/icons/UsersIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const CodeOwnerSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <UsersIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            CODEOWNERS Configuration
          </h2>
        </div>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            What is CODEOWNERS?
          </h3>
          <p className="text-gray-300">
            The CODEOWNERS file defines who is responsible for reviewing code in
            your repository. When a pull request is created, GitHub
            automatically requests reviews from the code owners.
          </p>
        </div>

        <CollapsibleSection
          title="Create CODEOWNERS File"
          id="create-codeowners"
        >
          <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-4">
            <li>
              Create a file at{" "}
              <code className="bg-gray-900 px-2 py-1 rounded">
                .github/CODEOWNERS
              </code>
            </li>
            <li>Add the following content:</li>
          </ol>

          <CodeBlock
            id="codeowners-content"
            code={`# Set [REVIEWER NAME] as the owner for the entire repository
* [REVIEWER NAME]`}
          />

          <div className="mt-4 bg-gray-900 rounded-lg p-4">
            <h4 className="font-semibold text-purple-400 mb-2">
              Configuration Explanation:
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • <code className="bg-gray-800 px-2 py-1 rounded">*</code> -
                Matches all files in the repository
              </li>
              <li>
                •{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  [REVIEWER NAME]
                </code>{" "}
                - GitHub username of the code owner
              </li>
              <li>
                • This ensures [REVIEWER NAME] is automatically notified of all PRs
              </li>
            </ul>
          </div>
        </CollapsibleSection>

        <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <TriangleAlertIcon
              className="text-yellow-400 shrink-0 mt-1"
              width={24}
              height={24}
            />
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Important</h4>
              <p className="text-gray-300">
                Replace{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">[REVIEWER NAME]</code>{" "}
                with your actual GitHub username throughout this guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeOwnerSection;
