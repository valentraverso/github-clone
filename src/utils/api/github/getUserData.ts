import octokit from "./connectGithub";

// @param {string} username
// Need to be the complete username of the user we are going to search
// 

export default async function getUserData(username: string) {
  try {
    const call = await octokit.users.getByUsername({
      username: username
    });

    return call;
  } catch (err) {
    return err;
  }
}