type Repository = { size: number };

const getGithubStats = async () : Promise<any> => {
  let githubStats = {
    totalRepos: "",
    codeSize: ""
  };
  
  await fetch("https://api.github.com/users/The-Law-1/repos")
    .then(async res => {
      let repositories: Repository[] = await res.json();
      
      // Find number of repositories
      githubStats.totalRepos = repositories.length.toString();
      
      // Find cumulative size of repository code
      let size = repositories
      .map(repository => repository.size)
      .reduce((prev, curr) => prev + curr);
      
      // Divide for KB and MB
      let suffix = "";
      if (size >= 1000000) {
        size /= 1000000;
        suffix = " MB";
      } else if (size >= 1000) {
        size /= 1000;
        suffix = " KB";
      }
      githubStats.codeSize = size.toFixed(1) + suffix;
      // remove zeroes after decimal point
      githubStats.codeSize = githubStats.codeSize.replace(/\.0+ /, " ");

    })
    .catch(() => {
      githubStats.totalRepos = "Some";
      githubStats.codeSize = "Lots";
    });
  return githubStats;
}

export default getGithubStats;