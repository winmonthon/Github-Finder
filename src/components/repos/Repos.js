import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
