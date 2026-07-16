import reactImg from '../../assets/react-img.png'
import './Header.css'


const newdesc = ['new','old','newold'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(props) {
    return (
      <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>{props.title} Essentials</h1>
      <p>
        {newdesc[getRandomInt(newdesc.length-1)]} {props.description} concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
}