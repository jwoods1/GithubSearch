import { url } from "inspector";

const formatTime = (d) => {
  let t = new Date(d);
  return t.toISOString().substring(0, 10);
};

const Result = ({
  avatar_url,
  html_url,
  login,
  repos_url,
  organizations_url,
  name,
  location,
  email,
  public_repos,
  created_at,
  updated_at,
  company,
}) => {
  return (
    <div className="mt-2 sm:mt-0">
      <div className="bg-white shadow rounded py-1">
        <div className="grid grid-cols-1">
          <div className="p-2 w-32 justify-self-center">
            <img
              className="w-32 h-32 rounded-full"
              src={avatar_url}
              alt={name}
            />
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-4">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>
              {login}
              {company ? `- ${company}` : ""}
            </p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Location
                </td>
                <td className="px-2 py-2">{location ?? "hidden"}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{email ?? "hidden"}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Repos</td>
                <td className="px-2 py-2">
                  <a href={repos_url}>{public_repos}</a>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Created Date
                </td>
                <td className="px-2 py-2">{formatTime(created_at)}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Updated Date
                </td>
                <td className="px-2 py-2">{formatTime(updated_at)}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-3">
            <a
              className="text-lg text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              href={html_url}
              target="_blank"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
