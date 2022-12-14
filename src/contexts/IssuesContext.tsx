import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { owner, repo } from "../constants/repoData";
import { api } from "../services/api";

interface IssuesProviderProps {
  children: ReactNode;
}

interface ProfileData {
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  login: string;
  name: string;
  html_url: string;
}

interface Issue {
  body: string;
  created_at: string;
  html_url: string;
  id: string;
  title: string;
  number: number;
  user: {
    html_url: string;
    login: string;
  };
  comments: number;
}

interface IssuesContextData {
  profileData: ProfileData | null;
  issues: Issue[];
  issue: Issue | null;
  fetchPageIssue: (number: number) => Promise<void>;
}

export const IssuesContext = createContext({} as IssuesContextData);

export const IssuesProvider = ({ children }: IssuesProviderProps) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [issue, setIssue] = useState<Issue | null>(null);
  const { pathname } = useLocation();

  const fetchProfileData = useCallback(async () => {
    const response = await api.get(`/users/${owner}`).then((res) => res.data);

    setProfileData(response);
  }, []);

  const fetchIssues = useCallback(async () => {
    const response = await api
      .get(`/repos/${owner}/${repo}/issues?`)
      .then((res) => res.data);

    setIssues(response);
  }, []);

  const fetchPageIssue = useCallback(async (number: number) => {
    const response = await api
      .get(`/repos/${owner}/${repo}/issues/${number}`)
      .then((res) => res.data);

    setIssue(response);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      fetchProfileData();
      fetchIssues();
    }
  }, [fetchIssues, fetchProfileData, pathname]);

  return (
    <IssuesContext.Provider
      value={{ profileData, issues, issue, fetchPageIssue }}
    >
      {children}
    </IssuesContext.Provider>
  );
};
