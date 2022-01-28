import Button from '../components/button';
import Image from 'next/image';
import Logo from '../public/images/logo.png';
import Link from 'next/link';
import { useAppContext } from '../global-state/provider';

const Navbar = () => {
  const signUpData = useAppContext()

  return (
    <nav className={'bg-gradient-to-t from-blue-darkest/40 to-blue-darkest/80 py-2 relative z-10'}>
      <div className={'container flex justify-between items-center'}>
        <Link href={'/'} passHref>
          <div className={'cursor-pointer flex items-center'}>
            <Image src={Logo} width={50} height={50} alt={'logo'}/>
          </div>
        </Link>

        <div className={'flex gap-4 items-center'}>
          {
            !signUpData.loggedIn ? (
                <>
                  <Link href={'/signup'} passHref>
                    <Button>Sign Up</Button>
                  </Link>
                  <Link href={'/signin'} passHref>
                    <Button>Sign In</Button>
                  </Link>
                </>
              ) :
              <>
                <Link href={'/add'} passHref>
                  <Button>Add Video</Button>
                </Link>
                <Button onClick={() => {
                  signUpData.setUserLoggedIn(false);
                  signUpData.setToken(undefined)
                }}>Wyloguj</Button>
              </>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
