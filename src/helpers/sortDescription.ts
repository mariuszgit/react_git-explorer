import { Repo } from "../types/Repo";

export const sortDescriptions = (a: Repo,b: Repo) => {
  const hasDescriptionA = a.hasOwnProperty("description");
  const hasDescriptionB = b.hasOwnProperty("description");
  if (!hasDescriptionA) {
    return 1;
  }
  if (!hasDescriptionB) {
    return -1;
  }
  return a.description.localeCompare(b.description);
} 