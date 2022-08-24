import { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";

export function useIssues() {
  return useContext(IssuesContext);
}
