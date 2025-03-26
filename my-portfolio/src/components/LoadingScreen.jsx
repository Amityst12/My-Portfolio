import { useEffect, useState  } from "react";

export const LoadingScreen = ( {onComplete} ) => { //Make loading animation
    const[text, setText] = useState("");
    const fullText = "Amit's Portfolio";

    useEffect(() =>{ //Set interval
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++; // Increace letter

            if(index> fullText.length){
                clearInterval(interval);

                setTimeout(()=> {
                    onComplete();
                },1000);
            }
        }, 100) //Time

        return () => clearInterval(interval) //Case of death
    }, [onComplete]);


    return(
     <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
            {text} <span className="animate-blink ml-1">| </span> 
        </div>

        <div className="w-[370px] h-[5px] bg-gray-800 rounded relative overflow-hidden">
        <div className="ml-40 mt-6 w-[200%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>

        </div>
    </div>
    );
};