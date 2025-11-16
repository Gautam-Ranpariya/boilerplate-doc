import LockIcon from "@components/icons/LockIcon";
import ShieldIcon from "@components/icons/ShieldIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const SecretSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <LockIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Required Secrets</h2>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full">
            <thead className="bg-linear-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Secret Name
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  Purpose
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold">
                  How to Get
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
                  Authentication with Vercel
                </td>
                <td className="px-6 py-4 text-gray-300">
                  Generate at Vercel Tokens
                </td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">
                    VERCEL_ORG_ID
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-300">Organization ID</td>
                <td className="px-6 py-4 text-gray-300">
                  From .vercel/project.json
                </td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">
                    VERCEL_PROJECT_ID
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-300">Project ID</td>
                <td className="px-6 py-4 text-gray-300">
                  From .vercel/project.json
                </td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="px-6 py-4">
                  <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                    GITHUB_TOKEN
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-300">GitHub API access</td>
                <td className="px-6 py-4 text-gray-300">
                  Auto-provided by GitHub
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CollapsibleSection title="Adding Secrets to GitHub" id="add-secrets">
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>Go to your repository on GitHub</li>
            <li>
              Navigate to <strong>Settings</strong> →{" "}
              <strong>Secrets and variables</strong> → <strong>Actions</strong>
            </li>
            <li>
              Click <strong>"New repository secret"</strong>
            </li>
            <li>Add each secret with the corresponding value</li>
          </ol>
        </CollapsibleSection>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ShieldIcon
              className="text-blue-400 shrink-0 mt-1"
              width={24}
              height={24}
            />
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Note</h4>
              <p className="text-gray-300">
                <code className="bg-gray-900 px-2 py-1 rounded">
                  GITHUB_TOKEN
                </code>{" "}
                is automatically provided by GitHub Actions and does not need
                manual configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretSection;
