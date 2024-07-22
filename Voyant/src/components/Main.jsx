
import videobg from "../assets/videobg.mov"
const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videobg} autoPlay loop muted></video>
        <div className="content">
            <h1>LAS MEJORES SOLUCIONES PARA TUS REQUERIMIENTOS</h1>
        </div>

    </div>
  )
}

export default Main