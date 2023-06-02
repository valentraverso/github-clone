import octokit from "./connectGithub";

export default async function getRepos(username: string, sort: "created" | "updated" | "pushed" | "full_name") {
    try {
        const call = await octokit.rest.repos.listForUser({
            username: username,
            sort: sort
        });

        return call.data;
    } catch (err) {
        return err;
    }
}