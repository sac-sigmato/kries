// components/GoogleTranslate.tsx
import Script from 'next/script';

export default function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element" />

      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: 'en', includedLanguages: 'en,kn' },
              'google_translate_element'
            );
          }
        `}
      </Script>

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <style jsx global>{`
        /* Increase width of translate dropdown */
        #google_translate_element .goog-te-gadget-simple {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          background: white;
          width: 200px;
          display: inline-block;
        }

        /* Prevent broken layout */
        #google_translate_element .goog-te-gadget-simple span {
          display: inline-block !important;
        }

        .goog-te-gadget .goog-te-combo {
    margin: 4px 0;
    padding: 0 20px;
}

        select.goog-te-combo{
        color: #333;}

        .goog-te-gadget {
    
    margin-bottom: -18px;
}
        /* Hide branding (use responsibly) */
        .goog-logo-link,
        .goog-te-gadget span {
          display: none !important;
        }

        .goog-te-gadget {
          color: transparent !important;
        }

        /* Optional: hide globe icon if present */
        .goog-te-gadget-simple img {
          display: none !important;
        }
      `}</style>
    </>
  );
}
