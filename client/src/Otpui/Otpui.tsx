import { useRef, useState } from "react";

export default function Otpui() {
    const [showOtp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRefs: any = useRef([]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setShowOtp(true);
        console.log("submitted");
    };

    const handlebackandenter = (e: any, index: any) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus()
        }
        if (e.key === "Enter" && e.target.value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus()
        }
    }
    const handleotp = (e: any, index: number) => {
        if (isNaN(e.target.value))
            return;
        const newotp = [...otp];
        newotp[index] = e.target.value;
        if (newotp[index].length > 1)
            newotp[index] = newotp[index].substring(1);
        // console.log(newotp)
        setOtp(() => newotp);
        if (e.target.value && index < otp.length - 1)
            inputRefs.current[index + 1].focus();
        // console.log(newotp)
    }

    return (
        <div className="flex justify-center mt-4">

            {!showOtp ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="text-2xl">Enter Phone Number : </label>
                        <input className=" border-2 rounded-lg border-zinc-950 m-2 p-2 text-xl" type={"number"}></input>
                        <button className="bg-blue-500 m-1 p-2 rounded-xl text-white" type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <div className="bg-blue-400 rounded-md">
                    <h2 className="font-serif text-white font-bold ">Enter Otp</h2>
                    {otp.map((_, index) => {
                        return (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type={"text"} value={otp[index]}
                                onChange={(e) => handleotp(e, index)}
                                onKeyUp={(e) => handlebackandenter(e, index)}
                                className="w-8 bg-slate-300 m-1 p-1 rounded-md"></input>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
