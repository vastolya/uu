export default function Home() {
  return (
    <div className="p-10 space-y-8 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <h1>H1 — NeutralFace / 100px / 400 / 96% / 0%</h1>
      <h2>H2 — NeutralFace / 49px / 400 / 115% / 0%</h2>
      <h3>H3 — Inter / 28px / 700 / 116% / -2%</h3>
      <p className="subtitle">Subtitle — Inter / 16px / 500 / 128% / 0%</p>
      <p className="subtitle-bold">
        Subtitle Bold — Inter / 16px / 700 / 128% / 0%
      </p>
      <p className="subtitle-sm">
        Subtitle Small — Inter / 12px / 400 / 133% / 0%
      </p>
      <button className="cursor-pointer">
        Button — Inter / 16px / 500 / 150% / 0%
      </button>
    </div>
  );
}
