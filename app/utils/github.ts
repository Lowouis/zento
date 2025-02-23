import { Octokit } from '@octokit/rest';

interface CommitResponse {
    total_commits: number;
}

export async function getTotalCommits(username: string, token?: string): Promise<CommitResponse> {
    try {
    
        const octokit = new Octokit(token ? { auth: token } : undefined);
        const { data: repos } = await octokit.request('GET /users/{username}/repos', {
            username,
            per_page: 100,
            type: 'all'
        });

        const commitPromises = repos.map(async (repo) => {
            try {
                console.log('Fetching commits for repo:', repo.name);
                const { data: commits } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                    owner: username,
                    repo: repo.name,
                    author: username,
                    per_page: 100
                });
                return commits.length;
            } catch (error) {
                console.error(`Error fetching commits for ${repo.name}:`, error);
                return 0;
            }
        });

        const commitCounts = await Promise.all(commitPromises);
        const total_commits = commitCounts.reduce((total, count) => total + count, 0);
        return { total_commits };
    } catch (error) {
        console.error('Error fetching GitHub commits:', error);
        return { total_commits: 0 };
    }
}
