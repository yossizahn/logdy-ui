
const DEMO_TAG = "G-GV50H4VZGC"
const PROD_TAG = ""

export default function loadAnalytics(demoMode: boolean) {

    console.log('Loading GA scripts')
    let script = document.createElement('script')
    script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + DEMO_TAG)
    document.head.appendChild(script)

    // @ts-expect-error
    window.dataLayer = window.dataLayer || [];
    // @ts-expect-error
    function gtag() { dataLayer.push(arguments); }
    // @ts-expect-error
    gtag('js', new Date());

    // @ts-expect-error
    gtag('config', 'G-GV50H4VZGC');
}