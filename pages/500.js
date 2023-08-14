import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import AnimatedAnchor from "../components/include/AnimatedAnchor";
import AppContext from "../context/AppContext.js";
import Button from '../components/include/Button';

export default function InternalServerError500() {
    const context = useContext(AppContext);

    return (
        <div className={context.darkMode ? "dark" : ""}>
            <main className="bg-orange-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                <section>
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <AnimatedAnchor href={"./"} openInNewTab={false}>
                            <h1 className="text-xl font-burtons">KevinJonathan</h1>
                        </AnimatedAnchor>

                        <ul className="flex items-center">
                            <li>
                                <AnimatedAnchor>
                                    <BsFillMoonStarsFill onClick={() => {
                                        context.setDarkMode(!context.darkMode)
                                    }} className="cursor-pointer text-2xl" />
                                </AnimatedAnchor>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10">
                        <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-600 font-semibold tracking-wide dark:text-blue-400 md:text-6xl">Oops!</h2>
                        <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl mb-4">500 - Internal Server Error</h3>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                            Perhaps the server needs time to recover itself...?
                        </p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button href={"./"} openInNewTab={false}>Try Again</Button>
                    </div>
                </section>
            </main>
        </div>
    );
}