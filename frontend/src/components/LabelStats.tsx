interface IPLabelStats {
  name: string;
  value: string | number;
}

function LabelStats({ name, value }: IPLabelStats) {
  return (
    <div className="label-stats">
      <h6>{name}</h6>
      <p>{value}</p>
    </div>
  );
}

export default LabelStats;
