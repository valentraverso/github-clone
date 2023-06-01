import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom";
import './Homepage.css';

function Homepage() {
  return (
    <main className='container-homepage__main'>
      <section className='container-welcome__section'>
        <p className='github-welcome__p'>Github Clone</p>
        <p className='valentino-copyrigth__p'>By Valentino Traverso</p>
        <div className='container-button__div'>
          <span className='button-view__span'>
            <Link>View Github <IoIosArrowForward /></Link>
          </span>
        </div>
      </section>
    </main>
  )
}

export { Homepage }