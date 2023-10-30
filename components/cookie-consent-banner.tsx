import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      flipButtons
      location="bottom"
      buttonText="Ho capito"
      cookieName="gdprAccept"
      buttonStyle={{
        color: "#000",
        fontSize: "15px",
        borderRadius: "5px",
        border: "1px solid #000",
      }}
      declineButtonStyle={{
        margin: "10px 10px 10px 0",
      }}
      expires={450}
    >
      Questo sito o gli strumenti terzi di questo sito si avvalgono di cookie
      necessari al funzionamento ed utili alle finalità illustrate nella Cookie
      Policy. Per saperne di più o negare il consenso a tutti o ad alcuni
      cookie, consulta la cookie policy. Continuando a navigare su questo sito
      acconsento all'utilizzo dei cookie .
    </CookieConsent>
  );
};
export default CookieConsentBanner;
