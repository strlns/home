/**This component relies on global CSS because of DRY, styles are also used by server rendered HTML before hydration. */
export default function LoadingIndicator() {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
}
