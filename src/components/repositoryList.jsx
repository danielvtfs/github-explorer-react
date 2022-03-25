import { RepositiryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react/cjs/react.production.min";

//https://api.github.com/users/danielvtfs/repos

const repository = {
  name: "Unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/danielvtfs/repos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositiryItem repository={repository} />
        <RepositiryItem repository={repository} />
        <RepositiryItem repository={repository} />
        <RepositiryItem repository={repository} />
      </ul>
    </section>
  );
}
