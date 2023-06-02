import octokit from "./connectGithub";

export default async function getRepos(username: string, sort: "created" | "updated" | "pushed" | "full_name") {
    try {
        const call = await octokit.rest.repos.listForUser({
            username: username, // Username of the user to search
            sort: sort // Sort result by "created" | "updated" | "pushed" | "full_name"
        });

        return call.data;
    } catch (err) {
        return err;
    }
}