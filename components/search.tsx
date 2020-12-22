import ParseLink from "parse-link-header"

export const GetData = async (url) => {
   let resp = await fetch(url);
   if(resp.ok){
    let pagination = GetPaginationLinks(resp);
    let data = await resp.json();
    return {pagination,
        data}
   }
   return null
  
};

const GetPaginationLinks = (resp) => {
    let links = resp.headers.get('link');
    if(links){
       return ParseLink(links)
    }
    return {}
}

const Search = (query) => {
    let q = query.includes("@") ? `${query} in:email` : `fullname:${query}`;
    const requestUrl = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=12`;
    const result = {pagination: {}, data:{items:[], total_count:0}};
    return  GetData(requestUrl);
}
export default Search;