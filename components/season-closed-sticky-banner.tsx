const SeasonClosedStickyBanner = () => {
  return (
    <div
      className="bg-orange-500 text-white text-center py-2 sticky"
      style={{ top: "var(--navbar-height, 96px)" }}
    >
      <p>Al momento il tesseramento è chiuso, ci vediamo nella prossima stagione!</p>
    </div>
  );
};

export default SeasonClosedStickyBanner;
