import './Grid.css';

function Grid({ loading, data: { header = [], values = [], actions = [] } }) {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map(({ label, type }) => (
            <th key={label} className={type === 'number' ? 'right' : 'center'}>
              {label}
            </th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={header.length + (actions.length ? 1 : 0)}>Loading..</td>
          </tr>
        ) : (
          values.map((row, index) => (
            <tr key={index}>
              {header.map(({ label, type }) => (
                <td key={label} className={type === 'number' ? 'right' : 'center'}>
                  {row[label]}
                </td>
              ))}
              {!!actions.length && (
                <td className="gridActions">
                  {actions
                    .filter(({ show }) => show(row))
                    .map(({ label, action }, index) => (
                      <button key={index} onClick={() => action(row)}>
                        {label}
                      </button>
                    ))}
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Grid;
