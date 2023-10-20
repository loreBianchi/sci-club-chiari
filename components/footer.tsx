import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className='sm:text-center'>
            <h6 className='text-blue-600'>SCI CLUB CHIARI</h6>
            <span>Via San Bernardino, 8</span><br/>
            <span>25032 Chiari (BS)</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div className='sm:mt-5 sm:text-center'>
              <p className='m-0'><b>Telefono</b> +39 366 300 58 02</p>
              <p className='m-0'><b>Facebook</b>	<a href='https://it-it.facebook.com/sciclubchiari.it/' target='blank'>https://it-it.facebook.com/sciclubchiari.it/</a></p>
              <p className='m-0'><b>E-mail</b> <a href='mailto:info@sciclubchiari.it' target='blank'>info@sciclubchiari.it</a></p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
