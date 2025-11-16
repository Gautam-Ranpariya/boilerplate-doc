import PackageIcon from "@components/icons/PackageIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const InstallationSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <PackageIcon className="text-purple-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Installation</h2>
        </div>

        <div className="bg-linear-to-r from-purple-900 to-pink-900 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Install next-pwa
          </h3>
          <p className="text-gray-200 mb-4">
            We'll use the{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">next-pwa</code>{" "}
            package to easily add PWA functionality to Next.js
          </p>
        </div>

        <CollapsibleSection
          title="Step 1: Install Dependencies"
          id="install-deps"
        >
          <CodeBlock
            id="install"
            code={`# Using npm
npm install next-pwa
      
# Using yarn
yarn add next-pwa`}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="Step 2: Configure next.config.js"
          id="config-next"
        >
          <p className="text-gray-300 mb-3">
            Update your{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              next.config.js
            </code>{" "}
            file:
          </p>
          <CodeBlock
            id="next-config"
            code={`const withPWA = require('next-pwa')({
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
      });
      
module.exports = withPWA({
  // Your existing Next.js config
  reactStrictMode: true,
});`}
          />

          <div className="mt-4 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">
              Configuration Explained:
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                •{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">
                  dest: 'public'
                </code>{" "}
                - Service worker output directory
              </li>
              <li>
                •{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">
                  register: true
                </code>{" "}
                - Auto-register service worker
              </li>
              <li>
                •{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">
                  skipWaiting: true
                </code>{" "}
                - Activate new service worker immediately
              </li>
              <li>
                • <code className="bg-gray-900 px-2 py-1 rounded">disable</code>{" "}
                - Disable PWA in development mode
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
                PWA features are disabled in development mode to avoid caching
                issues during development. They will work in production builds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallationSection;
