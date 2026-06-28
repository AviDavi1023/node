
export default function FormatName ({manufacturer, name}) {

  const words1 = manufacturer.trim().split(/\s+/);
  const words2 = name.trim().split(/\s+/);

  let overlapLength = 0;

  for (
    let len = Math.min(words1.length, words2.length);
    len > 0;
    len--
  ) {
    const suffix1 = words1
      .slice(-len)
      .map(w => w.toLowerCase());

    const prefix2 = words2
      .slice(0, len)
      .map(w => w.toLowerCase());

    if (suffix1.join(" ") === prefix2.join(" ")) {
      overlapLength = len;
      break;
    }
  }

  const fixedName = words2.slice(overlapLength).join(" ");

  return (
    <h2>
      {manufacturer}
      {fixedName ? ` ${fixedName}` : ""}
    </h2>
  );
}