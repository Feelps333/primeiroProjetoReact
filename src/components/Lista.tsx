export const List = () => {
  let list = [
    'felipe',
    'franca',
    'silva',
    'feelps',
    'antonio'
  ]

return (
  <div>
    <h2>Lista</h2>
    <ul>
      {list.map((item, index)=>(<li key={index}>{item.toLocaleUpperCase()}</li>))}
    </ul>
  </div>
)
}