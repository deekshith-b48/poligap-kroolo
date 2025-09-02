"use client";
import { DJANGO_API_ROUTES } from "@/constants/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "@/stores/user-store";
import { useIntegrationStore } from "@/stores/integration-store";
import { useMemo } from "react";
// import { useState, useEffect } from "react";

export type SearchResult = {
  id: string;
  title: string;
  content_preview: string;
  file_url: string;
  author_email: string;
  integration_type: string;
  relevance_score: number;
  sync_status: boolean;
  updated_at: string | null;
  account_id: string;
};

export type SearchSummary = {
  total: number;
  by_source: Record<string, number>;
  search_time_ms: number;
  rbac_user: string;
  search_method: string;
};

export type SearchClientResponse = {
  results: SearchResult[];
  summary: SearchSummary;
};

const fetchSearch = async (
  query: string,
  email: string,
  external_user_id: string,
  account_ids: string[],
  apps: string[]
) => {
  const response = await fetch(DJANGO_API_ROUTES.SEARCH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      user_email: email,
      external_user_id,
      account_ids: account_ids,
      apps,
    }),
  });
  const data = await response.json();
  console.log("search data ==>", data);
  return data.results;
};

// Custom hook for debounced search, debounceMs: number = 300
export const useSearch = (query: string) => {
  // const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce the query
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedQuery(query);
  //   }, debounceMs);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [query, debounceMs]);

  const { userData } = useUserStore.getState();
  const external_user_id = userData?.userId || "";
  // Get Google Drive account_id from the integration store
  const integrationStore = useIntegrationStore.getState();
  
  // Wrap arrays in useMemo to prevent re-creation on every render
  const account_ids = useMemo(() => {
    const ids = [...integrationStore.connectedAccountIds];
    // Add internal knowledge management if enabled
    if (integrationStore.isEnabled) {
      ids.push(external_user_id + "_internal");
      ids.push(external_user_id + "_site");
    }
    return ids;
  }, [integrationStore.connectedAccountIds, integrationStore.isEnabled, external_user_id]);

  const apps = useMemo(() => {
    const appsList = [...integrationStore.connectedIntegrations.map((i) => i.name)];
    // Add internal knowledge management if enabled
    if (integrationStore.isEnabled) {
      appsList.push("knowledge_management");
    }
    return appsList;
  }, [integrationStore.connectedIntegrations, integrationStore.isEnabled]);

  const userEmail = userData?.email || "";
  const isEnabled = integrationStore.isEnabled;
  
  // Simple useMemo for stable references
  const stableAccounts = useMemo(
    () => account_ids,
    [account_ids]
  );

  const stableApps = useMemo(
    () => apps, 
    [apps]
  );

  return useQuery({
    queryKey: [
      "search",
      query,
      userEmail,
      external_user_id,
      stableAccounts,
      apps,
      isEnabled,
    ],
    queryFn: () =>
      fetchSearch(query, userEmail, external_user_id, account_ids, apps),
    enabled: Boolean(
      query?.trim() &&
        account_ids?.length &&
        apps?.length &&
        userEmail &&
        external_user_id
    ),
    staleTime: 1000 * 60 * 60 * 1, // 1 hours
  });
};

export { fetchSearch };
