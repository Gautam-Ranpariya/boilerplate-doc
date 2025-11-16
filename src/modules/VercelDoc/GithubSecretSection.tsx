import LockIcon from "@components/icons/LockIcon";
import ShieldIcon from "@components/icons/ShieldIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const GithubSecretSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <LockIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            GitHub Secrets Configuration
          </h2>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full">
            <thead className="bg-linear-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Secret Name
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Value Source
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">
                    VERCEL_TOKEN
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  Personal access token from Vercel
                </td>
                <td className="px-6 py-4 text-gray-300">
                  Authentication with Vercel API
                </td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                    VERCEL_ORG_ID
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  orgId from .vercel/project.json
                </td>
                <td className="px-6 py-4 text-gray-300">
                  Organization identification
                </td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">
                    VERCEL_PROJECT_ID
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  projectId from .vercel/project.json
                </td>
                <td className="px-6 py-4 text-gray-300">
                  Project identification
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CollapsibleSection title="Adding Secrets to GitHub" id="add-secrets">
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>Navigate to your GitHub repository</li>
            <li>
              Go to <strong>Settings</strong> →{" "}
              <strong>Secrets and variables</strong> → <strong>Actions</strong>
            </li>
            <li>
              Click <strong>"New repository secret"</strong>
            </li>
            <li>Add each secret individually</li>
          </ol>
        </CollapsibleSection>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h4 className="font-semibold text-green-400 mb-3 flex items-center space-x-2">
            <ShieldIcon width={20} height={20} />
            <span>Security Benefits</span>
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              • Secrets are encrypted and only accessible during workflow runs
            </li>
            <li>• Contributors can't view secret values</li>
            <li>• Automatic masking in logs prevents accidental exposure</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GithubSecretSection;
