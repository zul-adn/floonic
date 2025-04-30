export const GTM_ID = 'GTM-NSVQSQFZ' // Replace with your actual GTM ID

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export const pageview = (url: string) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url,
  })
} 