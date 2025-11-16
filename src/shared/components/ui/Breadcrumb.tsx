// Next.js Imports
import ChevronRightIcon from '@components/icons/ChevronRightIcon'
import Link from 'next/link'

const Breadcrumb = ({ links }: { links: Array<CommonTypes.IBreadcrumbItem> }) => {
  const isNested = links.length > 1
  return (
    <>
      <nav className={`flex items-center ${isNested ? 'justify-end' : 'justify-start'} p-3 sm:p-4 my-1`} aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          {links.map((link, index) => (
            <li key={`${link.id}-${index}`} className="flex items-center space-x-2">
              {index === 0 ? (
                <span className="text-blue-600">{link.label}</span>
              ) : (
                <Link href={link.link || '#'} className="hover:underline text-secondary-500">
                  {link.label}
                </Link>
              )}
              {index < links.length - 1 && (
                <ChevronRightIcon />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb

