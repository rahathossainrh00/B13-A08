export default function LoadingSpinner() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-2 animate-spin"
          style={{ borderColor: "#E8622A", borderTopColor: "transparent" }}
        />
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "#6B6B6B", fontFamily: "'DM Sans', sans-serif" }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
