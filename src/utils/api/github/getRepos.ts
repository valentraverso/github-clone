import octokit from "./connectGithub";

export default async function getRepos(username: string) {
    try {
        const call = await octokit.rest.repos.listForUser({
            username: username
        });

        return call.data;
    } catch (err) {
        return err;
    }
}