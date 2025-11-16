import GlobeIcon from "@components/icons/GlobeIcon";
import ShieldIcon from "@components/icons/ShieldIcon";
import ZapIcon from "@components/icons/ZapIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const AdvanceSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <ZapIcon className="text-yellow-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Advanced Configuration
          </h2>
        </div>

        <CollapsibleSection title="Environment Variables" id="env-vars">
          <p className="text-gray-300 mb-3">
            Configure environment-specific variables in Vercel:
          </p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside mb-4">
            <li>Go to your project in Vercel Dashboard</li>
            <li>
              Navigate to <strong>Settings</strong> →{" "}
              <strong>Environment Variables</strong>
            </li>
            <li>Add variables for different environments</li>
          </ol>

          <div className="grid gap-3">
            <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-1">Production</h4>
              <p className="text-gray-300 text-sm">
                Live environment variables
              </p>
            </div>
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-1">Preview</h4>
              <p className="text-gray-300 text-sm">
                Staging/development variables
              </p>
            </div>
            <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-1">
                Development
              </h4>
              <p className="text-gray-300 text-sm">
                Local development overrides
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Custom Domains" id="custom-domains">
          <p className="text-gray-300 mb-3">Adding your custom domain:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Purchase and configure your domain</li>
            <li>
              In Vercel Dashboard: <strong>Settings</strong> →{" "}
              <strong>Domains</strong>
            </li>
            <li>Add your domain and configure DNS</li>
            <li>Enable automatic HTTPS (included free)</li>
          </ol>

          <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded-lg border border-purple-500 mt-4">
            <p className="text-gray-200 flex items-center space-x-2">
              <GlobeIcon className="text-purple-400" width={20} height={20} />
              <span>
                <strong>Bonus:</strong> Vercel provides free SSL certificates
                for all domains
              </span>
            </p>
          </div>
        </CollapsibleSection>

        <div className="bg-linear-to-r from-orange-900 to-red-900 p-6 rounded-lg border border-orange-500">
          <h3 className="text-xl font-semibold mb-3 text-white flex items-center space-x-2">
            <ShieldIcon width={24} height={24} />
            <span>Security Best Practices</span>
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              • <strong>Never commit</strong> .vercel/ folder to version control
            </li>
            <li>
              • <strong>Rotate tokens</strong> regularly (every 6-12 months)
            </li>
            <li>
              • <strong>Use scoped tokens</strong> with minimal required
              permissions
            </li>
            <li>
              • <strong>Monitor deployment logs</strong> for suspicious activity
            </li>
            <li>
              • <strong>Enable branch protection</strong> on main branch
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdvanceSection;
