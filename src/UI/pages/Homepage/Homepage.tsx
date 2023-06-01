import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import './Homepage.css';

function Homepage() {
  return (
    <main className='container-homepage__main'>
      <section className='container-welcome__section'>
        <p className='github-welcome__p'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Github Clone")
                .start()
            }}
          />
        </p>
        <p className='valentino-copyrigth__p'>By Valentino Traverso</p>
        <div className='container-button__div'>
          <Link to="/repository">
            <span className='button-github__div'>
              View Github <IoIosArrowForward className='button-icon__span' />
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export { Homepage }