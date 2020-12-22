import ParseLink from "parse-link-header"

const Paginator = (link) => {
    return ParseLink(link)
}

export default Paginator;