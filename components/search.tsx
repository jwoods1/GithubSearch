import ParseLink from "parse-link-header";

export const GetData = async (url) => {
  // check for rate limit
  let result = {
    ratelimit: false,
    pagination: {},
    data: { items: [], total_count: 0 },
  };
  let resp = await fetch(url).catch((d) => {
    console.log("Error Fetching Data");
    return d;
  });
  switch (resp.status) {
    case 200:
      let data = await resp.json();
      result.pagination = GetPaginationLinks(resp);
      data.items = await FetchUsersData(data.items);
      if (data.items.length === 0) {
        result.ratelimit = true;
      }
      result.data = data;
      break;
    case 403:
      result.ratelimit = true;
      break;
    default:
      console.log("defauilt");
      break;
  }
  return result;
};

const GetPaginationLinks = (resp) => {
  let links = resp.headers.get("link");
  if (links) {
    return ParseLink(links);
  }
  return {};
};
const FetchUsersData = async (urlList) => {
  let responses = await Promise.all(urlList.map((u) => fetch(u.url)));
  let users = await Promise.all(
    responses.map((resp: any) => {
      switch (resp.status) {
        case 200:
          return resp.json();
        default:
          return null;
      }
    })
  );
  return users.includes(null) ? [] : users;
};
const Search = (query) => {
  let q = query.includes("@") ? `${query} in:email` : `fullname:${query}`;
  const requestUrl = `https://api.github.com/search/users?q=${encodeURIComponent(
    q
  )}&per_page=6`;
  const result = { pagination: {}, data: { items: [], total_count: 0 } };
  return GetData(requestUrl);
};
export default Search;
