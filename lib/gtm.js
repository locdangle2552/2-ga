export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export const pageview = (url) => {
  console.log("🚀 ~ pageview ~ window.dataLayer:", window.dataLayer);
 gtag("event","pageViewT",{page:url})
}
