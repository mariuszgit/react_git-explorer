import { Repo } from "../types/Repo";

export const sortDescriptions = (a: Repo, b: Repo) => {
  const hasDescriptionA =
    a && a.description !== null && a.hasOwnProperty("description");
  const hasDescriptionB =
    b && b.description !== null && b.hasOwnProperty("description");

  if (!hasDescriptionA) {
    return 1;
  }
  if (!hasDescriptionB) {
    return -1;
  }

  if (a.description !== null && b.description !== null) {
    return (a.description || "").localeCompare(b.description || "");
  }

  if (a.description === null && b.description === null) {
    return 0;
  } else if (a.description === null) {
    return 1;
  } else {
    return -1;
  }
};
