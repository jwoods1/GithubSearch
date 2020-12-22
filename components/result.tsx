
const Result = ({avatar_url, html_url, login, repos_url, organizations_url}) => {
    return (
        <div className="bg-gray-100 p-6 rounded shadow hover:shadow-xl">
          <a href={html_url} target="_blank" >
              <img className="h-40 rounded-full object-cover object-center mb-6" src={avatar_url} alt={`github user ${login}`} />
              <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">{login}</p>
          </a>
          <a href={repos_url} target="_blank" className="text-lg text-gray-900 font-medium title-fontblock">Repos</a>
          <a href={organizations_url}  target="_blank" className="leading-relaxed text-base block">Orgainazion</a>
        </div>
      
    )
}

export default Result;