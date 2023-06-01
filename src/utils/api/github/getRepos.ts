import octokit from "./connectGithub";

export default async function getRepos(username: string) {
    try {
        const call = await octokit.request(`GET /users/${username}/repos`);

        return call;
    } catch (err) {
        return err;
    }
}