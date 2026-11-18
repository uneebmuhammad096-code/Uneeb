const fallbackSiteUrl = "https://wistant.vercel.app";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
