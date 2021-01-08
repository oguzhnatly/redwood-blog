import { Link, routes, useLocation } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const BlogLayout = ({ children }) => {
  const location = useLocation()
  function menuItems() {
    const items = [
      {
        title: 'Home',
        route: routes.home(),
      },
      {
        title: 'About',
        route: routes.about(),
      },
      {
        title: 'Contact',
        route: routes.contact(),
      },
    ]
    return items.map((item) => {
      return (
        <>
          <Link
            className={
              location.pathname == item.route.toString()
                ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            }
            to={item.route}
          >
            {item.title}
          </Link>
        </>
      )
    })
  }

  return (
    <>
      <header className="bg-gray-800 block">
        <div className="py-8 max-w-6xl mx-auto px-60">
          <div className="flex justify-center">
            <Link className="relative block h-40 w-40" to={routes.home()}>
              <img
                className="rounded-full align-middle"
                alt="Profile Image"
                src="https://avatars1.githubusercontent.com/u/54781138?s=460&u=b7b60d98c3148c93e252a6a45eded8a25e78197e&v=4"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="flex w-24 justify-around pt-4 h-10">
              <a href="mailto:oguzhnatly@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-300" />
              </a>
              <a
                href="https://github.com/oguzhnatly"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <nav>
          <div className="max-w-7xl mx-auto px-3">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center">
                <div className="sm:block sm:ml-6">
                  <div className="flex space-x-4">{menuItems()}</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
