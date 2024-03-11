interface IPLabelStats {
  name: string;
  value: string | number;
}

function LabelStats({ name, value }: IPLabelStats) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      <h6 style={{ textTransform: "capitalize" }}>{name}</h6>
      <p>{value}</p>
    </div>
  );
}

export default LabelStats;
