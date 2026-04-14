
import axios from "axios";
function Card(props) {
  

return (
    <div  className='h-80 w-80  justify-center gap-6  relative'>
        <img  className="h-70 w-full object-cover" src={props.elem.primaryImage.url} alt="movie" />
        <h1 className='text-white z-10 relative border-blue-500  text-lg font-bold'>{props.elem.primaryTitle
}</h1>

    </div>
)
}

export default Card