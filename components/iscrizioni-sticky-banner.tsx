type Props = {
  bannerLink: string;
};

const IscrizioniStickyBanner = ({ bannerLink }: Props) => {
  return (
    <div
      className="bg-green-500 text-white text-center py-2 sticky"
      style={{ top: "var(--navbar-height, 96px)" }}
    >
      <p>
        <strong>🚨 ATTENZIONE 🚨</strong> le iscrizioni sono aperte!{" "}
        <a
          href={bannerLink}
          className="underline hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clicca qui per iscriverti!
        </a>
      </p>
    </div>
  );
};

export default IscrizioniStickyBanner;
