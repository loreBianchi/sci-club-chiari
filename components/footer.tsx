import Container from './container'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-blue-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className='text-center'>
            <h6 className='text-blue-600 font-semibold'>SCI CLUB CHIARI</h6>
            <span>Via San Bernardino, 8</span><br/>
            <span>25032 Chiari (BS)</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div className='mt-5 text-center'>
              <p className='m-0'><b>Telefono</b> +39 366 300 58 02</p>
              <p className='m-0'><b>E-mail</b> <a href='mailto:info@sciclubchiari.it' className='hover:underline hover:text-blue-400' target='blank'>info@sciclubchiari.it</a></p>
              <div className="flex flex-row mt-2 items-center justify-center">
                <a href='https://it-it.facebook.com/sciclubchiari.it/' target='blank'>
                  <FaFacebookSquare className='text-3xl text-blue-600 hover:text-blue-400' />
                </a>
                <a href='https://www.instagram.com/sci_club_chiari_asd/' target='blank'>
                  <FaInstagramSquare className='text-3xl text-blue-600 ml-2 hover:text-blue-400' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
