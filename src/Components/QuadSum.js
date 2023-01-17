const QuadSum = (props) => {
  const handleChange = (e) => {};

  return (
    <table className="quad-sums">
      {props.quads.map((row, i) => (
        <tr key={i}>
          {row.map((col, j) => (
            <td>
              <input
                className="quad-sum-input"
                key={j}
                type="number"
                value={col}
                onChange={(e) => handleChange(e, i, j)}
              />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default QuadSum;
