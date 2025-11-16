import SmartPhoneIcon from "@components/icons/SmartPhoneIcon"

const PWAHeader = () => {
  return (
    <>
      <header className="bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-blue-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-linear-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <SmartPhoneIcon className="text-white" width={28} height={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">PWA Implementation Guide</h1>
                <p className="text-sm text-gray-400">Progressive Web App for Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default PWAHeader
