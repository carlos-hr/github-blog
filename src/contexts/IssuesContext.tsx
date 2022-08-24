import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
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
  url: string;
}

interface Issues {
  body: string;
  created_at: string;
  title: string;
}

interface IssuesContextData {
  profileData: ProfileData | null;
  issues: Issues[];
}

export const IssuesContext = createContext({} as IssuesContextData);

export const IssuesProvider = ({ children }: IssuesProviderProps) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

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

  useEffect(() => {
    fetchProfileData();
    fetchIssues();
  }, [fetchIssues, fetchProfileData]);

  return (
    <IssuesContext.Provider value={{ profileData, issues }}>
      {children}
    </IssuesContext.Provider>
  );
};
