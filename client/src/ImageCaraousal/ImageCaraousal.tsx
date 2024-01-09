import { useState } from 'react'
import w1 from './images/w1.jpg'
import w2 from './images/w2.jpg'
import w3 from './images/w3.jpg'
import w4 from './images/w4.jpg'
import w5 from './images/w5.jpg'
import w6 from './images/w6.jpg'
import w7 from './images/w7.jpg'

const ImageCaraousal = () => {
    const imgarray = [w1, w2, w3, w4, w5, w6, w7];
    const [imgno, setImageNo] = useState(2);
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-slate-300 p-2 '>
            <h1 className=' font-bold bg-black text-white mb-2 py-2  px-7 rounded-lg'>Image Caraousal</h1>
            <div className='flex justify-center items-center'>
                <span className='cursor-pointer' onClick={() => setImageNo(imgno == 0 ? imgarray.length - 1 : imgno - 1)}>◀</span>
                <div className='flex '>
                    {
                        imgarray.map((cur, index) => {
                            return (
                                imgno == index && <img key={index} className='w-96 h-72 rounded-lg' src={cur} alt='1' ></img>
                            )
                        })
                    }
                </div>
                <span className='cursor-pointer' onClick={() => setImageNo(imgno == 0 ? imgarray.length - 1 : imgno - 1)}>▶</span>
            </div>
        </div >
    )
}

export default ImageCaraousal