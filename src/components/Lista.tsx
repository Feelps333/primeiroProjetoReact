type Props = {
  data: {
    name: string;
    age: number
  }
}

export const List = () => {
  let list = [
    'felipe',
    'franca',
    'silva',
    'feelps',
    'antonio'
  ]
  let listTwo = [
    {name: 'cristiano', age: 25},
    {name: 'messi', age: 47},
    {name: 'ronaldo', age: 33},
    {name: 'maldini', age: 20},
    {name: 'mbappe', age: 53}
  ]

return (
  <div>
    <h2>Lista</h2>
    <ul>
      {list.map((item, index)=>(<li key={index}>{item.toLocaleUpperCase()}</li>))}
    </ul>
    <ul>
      {listTwo.map((item, index)=>(<li key={index}>{item.name} - {item.age}</li>))}
    </ul>
  </div>
)
}