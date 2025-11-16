import BellIcon from "@components/icons/BellIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const NotificationSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <BellIcon className="text-yellow-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Push Notifications</h2>
        </div>

        <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-6 rounded-lg border border-yellow-500">
          <p className="text-gray-200">
            Re-engage users with timely push notifications, even when your app
            is closed.
          </p>
        </div>

        <CollapsibleSection title="Request Permission" id="request-permission">
          <CodeBlock
            id="permission-code"
            code={`async function requestNotificationPermission() {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return;
    }
      
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      console.log('Notification permission granted');
    } else if (permission === 'denied') {
      console.log('Notification permission denied');
    }
}`}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="Show Local Notification"
          id="local-notification"
        >
          <CodeBlock
            id="show-notification"
            code={`function showNotification() {
    if (Notification.permission === 'granted') {
      new Notification('Hello!', {
        body: 'This is a test notification',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        tag: 'test-notification',
        vibrate: [200, 100, 200],
      });
    }
}`}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="Service Worker Notifications"
          id="sw-notifications"
        >
          <p className="text-gray-300 mb-3">
            Show notifications from service worker:
          </p>
          <CodeBlock
            id="sw-notification"
            code={`// In your service worker
self.addEventListener('push', (event) => {
    const options = {
        body: event.data.text(),
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
              action: 'explore',
              title: 'View',
              icon: '/icons/checkmark.png'
            },
            {
              action: 'close',
              title: 'Close',
              icon: '/icons/xmark.png'
            },
        ]
    };
      
    event.waitUntil(
        self.registration.showNotification('PWA Notification', options)
    );
});
      
    self.addEventListener('notificationclick', (event) => {
    event.notification.close();
      
    if (event.action === 'explore') {
        clients.openWindow('/');
    }
});`}
          />
        </CollapsibleSection>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <h4 className="font-semibold text-blue-400 mb-3">
            Notification Best Practices
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              • Always request permission at the right time (not on page load)
            </li>
            <li>• Provide clear value before asking for permission</li>
            <li>• Keep notification messages concise and actionable</li>
            <li>• Use icons and images to make notifications more engaging</li>
            <li>• Respect user preferences and provide opt-out options</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotificationSection;
