import WIFIOffIcon from "@components/icons/WIFIOffIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const OfflineSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <WIFIOffIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Offline Support</h2>
        </div>

        <div className="bg-linear-to-r from-red-900 to-orange-900 p-6 rounded-lg border border-red-500">
          <p className="text-gray-200">
            Provide a seamless experience when users lose internet connection.
          </p>
        </div>

        <CollapsibleSection title="Create Offline Page" id="offline-page">
          <p className="text-gray-300 mb-3">
            Create{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              pages/offline.tsx
            </code>
            :
          </p>
          <CodeBlock
            id="offline-page-code"
            code={`export default function Offline() {
return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center">
                <div className="text-6xl mb-4">📡</div>
                <h1 className="text-3xl font-bold text-white mb-2">
                    You're Offline
                </h1>
                <p className="text-gray-400 mb-6">
                    Please check your internet connection
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}`}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="Detect Online/Offline Status"
          id="detect-status"
        >
          <p className="text-gray-300 mb-3">
            Create a hook to detect connectivity:
          </p>
          <CodeBlock
            id="online-hook"
            code={`import { useState, useEffect } from 'react';
      
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
  
    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
  
      function handleOffline() {
        setIsOnline(false);
      }
  
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
  
    return isOnline;
}`}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Show Offline Banner" id="offline-banner">
          <p className="text-gray-300 mb-3">Display a banner when offline:</p>
          <CodeBlock
            id="offline-banner-code"
            code={`import { useOnlineStatus } from '@/hooks/useOnlineStatus';
      
export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 text-center z-50">
      <p className="text-sm">
        ⚠️ You are currently offline. Some features may be unavailable.
      </p>
    </div>
  );
}`}
          />
        </CollapsibleSection>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h4 className="font-semibold text-green-400 mb-3">
            Offline Features to Consider
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✅ Cache critical pages and assets</li>
            <li>✅ Show cached data when offline</li>
            <li>✅ Queue actions to sync when back online</li>
            <li>✅ Display clear offline indicators</li>
            <li>✅ Provide meaningful offline fallback content</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OfflineSection;
