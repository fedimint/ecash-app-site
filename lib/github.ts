import { cache } from "react";

const GITHUB_RELEASES_URL =
  "https://api.github.com/repos/fedimint/e-cash-app/releases";

interface GithubAsset {
  name: string;
  browser_download_url: string;
}

interface GithubRelease {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  assets: GithubAsset[];
}

function parseSemver(tag: string | undefined | null): [number, number, number] {
  if (!tag) {
    return [0, 0, 0];
  }

  const cleaned = tag.trim().replace(/^v/gi, "");
  const coreVersion = cleaned.split(/[+-]/)[0] ?? "";
  const parts = coreVersion.split(".");

  const numbers: number[] = parts.slice(0, 3).map((part) => {
    const value = Number.parseInt(part, 10);
    return Number.isFinite(value) ? value : 0;
  });

  while (numbers.length < 3) {
    numbers.push(0);
  }

  return [numbers[0], numbers[1], numbers[2]];
}

function compareSemverDescending(
  a: string | undefined,
  b: string | undefined
): number {
  const [aMajor, aMinor, aPatch] = parseSemver(a);
  const [bMajor, bMinor, bPatch] = parseSemver(b);

  if (aMajor !== bMajor) return bMajor - aMajor;
  if (aMinor !== bMinor) return bMinor - aMinor;
  if (aPatch !== bPatch) return bPatch - aPatch;

  return 0;
}

async function fetchGithubReleases(): Promise<GithubRelease[]> {
  const headers: Record<string, string> = {
    "User-Agent": "e-cash-app-site-build",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(GITHUB_RELEASES_URL, {
    headers,
    next: { revalidate: 60 * 60 }, // refresh once per hour if revalidated at runtime
  });

  if (!response.ok) {
    throw new Error(
      `GitHub releases request failed: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as GithubRelease[];
  return Array.isArray(data) ? data : [];
}

export const getLatestApkDownloadUrl = cache(async (): Promise<string> => {
  try {
    const releases = await fetchGithubReleases();

    const stableReleases = releases
      .filter((release) => !release.draft && !release.prerelease)
      .sort((a, b) => compareSemverDescending(a.tag_name, b.tag_name));

    for (const release of stableReleases) {
      const apkAsset = release.assets?.find((asset) =>
        asset.name.toLowerCase().endsWith(".apk")
      );
      if (apkAsset) {
        return apkAsset.browser_download_url;
      }
    }
  } catch (error) {
    console.error("Failed to resolve latest APK download URL:", error);
  }

  return GITHUB_RELEASES_URL;
});
