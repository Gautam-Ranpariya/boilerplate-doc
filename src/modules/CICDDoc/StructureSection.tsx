import ActivityIcon from "@components/icons/ActivityIcon";
import FileTextIcon from "@components/icons/FileTextIcon";
import UsersIcon from "@components/icons/UsersIcon";
import CodeBlock from "@components/ui/CodeBlock";

const StructureSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <FileTextIcon className="text-purple-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Project Structure</h2>
        </div>

        <div className="bg-linear-to-r from-purple-900 to-pink-900 p-6 rounded-lg border border-purple-500">
          <p className="text-gray-200 mb-4">
            The CI/CD integration requires the following file structure:
          </p>
          <CodeBlock
            id="structure"
            code={`.github/
      ├── workflows/
      │   └── ci.yml          # Main CI/CD pipeline
      └── CODEOWNERS          # Repository code owners configuration`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-blue-500 rounded-lg p-5">
            <div className="flex items-start space-x-3">
              <ActivityIcon
                className="text-blue-400 shrink-0"
                width={24}
                height={24}
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  ci.yml
                </h3>
                <p className="text-gray-400 text-sm">
                  Contains the complete CI/CD workflow configuration with all
                  jobs and steps
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500 rounded-lg p-5">
            <div className="flex items-start space-x-3">
              <UsersIcon
                className="text-purple-400 shrink-0"
                width={24}
                height={24}
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  CODEOWNERS
                </h3>
                <p className="text-gray-400 text-sm">
                  Defines who is responsible for reviewing code in your
                  repository
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StructureSection;
