import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer" src="https://superdistros.com/playground_assets/logox1-200h.png" alt="BGN" />
            </Link>
        
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>Our DAO</h3>
                <h3>Write</h3>
                <h3 className="text-white bg-red-600 px-4 py-1 rounded-full">Discord</h3>
            </div>
        </div>

        <div className="flex items-center space-x-5 text-red-600">
            <h3>News</h3>
            <h3 className="border px-4 border-red-600 rounded-full">Sign In</h3>
        </div>
    </header>
  );
}

export default Header;