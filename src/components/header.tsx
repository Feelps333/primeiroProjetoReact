type Props = {
  title: string;
}

export const Header = (props: Props) => {
  return(
    <div>
      <h1>Olá React</h1>
      <h1>{props.title}</h1>
      <br />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam, facilis excepturi consequatur, cupiditate adipisci est tempora vitae repudiandae modi ipsum voluptatem sequi hic a nobis? Eaque ipsam autem odio?</p>
    </div>
  )
}