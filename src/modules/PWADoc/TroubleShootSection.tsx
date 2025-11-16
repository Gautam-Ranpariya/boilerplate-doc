import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const TroubleShootSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <TriangleAlertIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Troubleshooting</h2>
        </div>

        <CollapsibleSection
          title="Service Worker Not Registering"
          id="sw-not-registering"
        >
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                Issue: Service worker fails to register
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                <strong>Possible Causes:</strong>
              </p>
              <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
                <li>Not using HTTPS (required except localhost)</li>
                <li>Service worker file not in correct location</li>
                <li>Browser doesn't support service workers</li>
              </ul>
              <p className="text-green-400 text-sm mt-3">
                <strong>Solution:</strong> Check browser console for errors,
                ensure HTTPS, verify sw.js path
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="App Not Installable" id="not-installable">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Issue: Install prompt doesn't appear
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                <strong>Requirements:</strong>
              </p>
              <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
                <li>Valid manifest.json with required fields</li>
                <li>Service worker registered successfully</li>
                <li>Served over HTTPS</li>
                <li>At least 192x192 and 512x512 icons</li>
                <li>start_url that loads successfully</li>
              </ul>
              <p className="text-green-400 text-sm mt-3">
                <strong>Solution:</strong> Run Lighthouse audit to see specific
                missing requirements
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Caching Issues" id="caching-issues">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Issue: Old content cached, updates not showing
              </h4>
              <p className="text-green-400 text-sm mb-3">
                <strong>Solutions:</strong>
              </p>
              <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
                <li>Clear cache manually in DevTools</li>
                <li>Update service worker version</li>
                <li>
                  Use{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded">
                    skipWaiting: true
                  </code>{" "}
                  in config
                </li>
                <li>Implement update notification for users</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Icons Not Displaying" id="icons-issue">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                Issue: App icons don't show up
              </h4>
              <p className="text-green-400 text-sm mb-3">
                <strong>Checklist:</strong>
              </p>
              <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
                <li>Icons are in /public/icons/ directory</li>
                <li>File names match manifest.json exactly</li>
                <li>Icons are PNG format</li>
                <li>Correct sizes (192x192, 512x512 minimum)</li>
                <li>purpose field set correctly</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Offline Page Not Working"
          id="offline-not-working"
        >
          <div className="space-y-3">
            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Issue: Offline fallback doesn't load
              </h4>
              <p className="text-green-400 text-sm mb-3">
                <strong>Solutions:</strong>
              </p>
              <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
                <li>Ensure offline page is cached in service worker</li>
                <li>Check caching strategy configuration</li>
                <li>Verify offline page route exists</li>
                <li>Test with DevTools offline mode</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
};

export default TroubleShootSection;
