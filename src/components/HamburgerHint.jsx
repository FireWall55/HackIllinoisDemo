import "./HamburgerHint.css";

function HamburgerHint() {
  return (
    <div className="hamburger-hint" aria-hidden="true">
      <svg className="hamburger-hint-arrow" width="60" height="68" viewBox="0 0 70 80" fill="none">
        <path d="M14 70 Q 45 40 54 6" stroke="#08303f" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M46 16 L54 6 L58 18"
          stroke="#08303f"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hamburger-hint-text">click here to explore the pages</span>
    </div>
  );
}

export default HamburgerHint;