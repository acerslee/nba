import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return(
    <header className="w-full">
      <div className="flex items-center justify-around bg-green-900 md:space-x-10">
        <div>
          <Link href = "/">
            <Image
              src = "/shoe-logo.png"
              alt = "Shoe Brand"
              width = {100}
              height = {100}
            />
          </Link>
        </div>
        <div className = "space-x-20">
          <span className = "text-white text-4xl md:text-lg sm:text-m">Brands</span>
          <Link href = '/about'>
            <span className = "text-white text-4xl md:text-lg sm:text-m">About</span>
          </Link>
          <span className = "text-white text-4xl md:text-lg sm:text-m">Login</span>
        </div>
      </div>
    </header>
  )
};

export default Navbar;