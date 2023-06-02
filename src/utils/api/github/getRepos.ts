import octokit from "./connectGithub";

export default async function getRepos(username: string, sort: "created" | "updated" | "pushed" | "full_name") {
    try {
        const call = await octokit.rest.repos.listForUser({
            username: username, // Username of the user to search
            sort: sort // Sort result by "created" | "updated" | "pushed" | "full_name"
        });

        const response = call.data.map(repository => ({
            name: repository.name,
            updated_at: repository.updated_at,
            url: repository.html_url,
            description: repository.description,
            language: repository.language
        }))

        return response;
    } catch (err) {
        return [];
    }
}