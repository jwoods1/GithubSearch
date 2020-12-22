const Footer = () => {
    return <footer className="text-gray-700 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">Jason Woods</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 {' '}
        <a href="https://github.com/jwoods1/GithubSearch" target="_blank">Github Reop</a>
      </p>
    </div>
  </footer>
}

export default Footer;