import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="https://superdistros.com">
                <img className="w-44 object-contain cursor-pointer" src="https://cdn.sanity.io/images/t8gvwh0d/production/ee2446dd307393813cd75e5d19a41a7fe223df21-317x46.svg?w=2000&fit=max&auto=format&dpr=3" alt="BGN" />
            </Link>
        
            <div className="hidden md:inline-flex items-center space-x-5">
                
            </div>
        </div>

        <div className="flex items-center space-x-5 text-red-600">
            <a className="hidden md:inline-flex font-bold text-black hover:text-red-600" href="https://superdistros.com/#abilities">Abilities</a>
            <a className="hidden md:inline-flex font-bold text-black hover:text-red-600" href="https://superdistros.com/#distros">Distros</a>
            <a className="font-bold text-red-600" href="/">Blog</a>
            <a className="font-bold border px-4 py-1 border-red-600 rounded-full hover:bg-red-600 hover:text-white" href="https://app.hellobonsai.com/u/superdistros/contact" target="_blank">Get in touch</a>
        </div>
    </header>
  );
}

export default Header;