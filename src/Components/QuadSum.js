const QuadSum = (props) => {
  const handleChange = (e, i, j) => {
    props.onChange(i, j, e.target.value);
  };

  return (
    <table className="quad-sums">
      <tbody>
        {props.quads.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td key={j}>
                <input
                  className="quad-sum-input"
                  type="number"
                  value={col}
                  onChange={(e) => handleChange(e, i, j)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuadSum;
