export function LoadingDots() {
  return (
    <span role="status" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="animate-loading-dot"
          style={{ animationDelay: `${i * 0.22}s` }}
        >
          .
        </span>
      ))}
    </span>
  );
}
