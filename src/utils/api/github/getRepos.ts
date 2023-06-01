import { GITHUB_KEY } from "../../config";
import octokit from "./connectGithub";

export default async function getRepos() {
    const call = await octokit.request("GET /users/valentraverso/repos")

    console.log(call)
}