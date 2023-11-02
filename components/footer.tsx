import Container from './container'
import { FaFacebookSquare, FaHeart, FaInstagramSquare } from 'react-icons/fa';

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
      <div className="flex lex-row justify-center items-center border-t border-blue-200 p-1 w-full text-sm">
        Icons by <a className='underline ml-1' href='https://icons8.com/' target='blank'>Icons8</a> - Made with <FaHeart className='mx-1' /> by <a className='underline ml-1' href='https://lorenzo-bianchi.vercel.app/' target='blank'>Lorenzo Bianchi</a>
      </div>
    </footer>
  )
}

export default Footer
