import { Octokit } from "@octokit/rest";
import { GITHUB_KEY } from "../../config";

const octokit = new Octokit({
    auth: GITHUB_KEY,
    userAgent: "GitClone"
})

export default octokit;