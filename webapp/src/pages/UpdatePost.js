
import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const UpdatePost = () => {
    const { quill, quillRef } = useQuill();
    console.log(quill);    // undefined > Quill Object
    console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

    return (

        <div className="flex w-full justify-center py-5 max-h-full justify-center  items-center bg-gradient-to-t  from-black to-transparent">

            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 h-[400px] bg-gray-200 shadow-sm rounded-md mx-10">
                <div className="relative py-3 border-b border-gray-400">
                    <div className="text-center font-bold">Modifier votre publication</div>
                    <div className="absolute p-3 top-2 right-2  rounded-[50%] bg-gray-500 text-white text-2xl">x</div>
                </div>
                <div className="py-2 px-2">
                    <div className="flex">
                        <div>
                            <img src={`https://scontent.fabj2-1.fna.fbcdn.net/v/t39.30808-6/305622964_509388167858287_8508266908949323469_n.jpg?stp=dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEWBFCTOomf64vQ03r1P2TtiGphjjSd3LyIamGONJ3cvCr65zSrNYVD2v4Zmt8_LZf-DVqZTcxJhFsE7uQoAYha&_nc_ohc=qcTerpf0FssAX9V2VN9&_nc_zt=23&_nc_ht=scontent.fabj2-1.fna&oh=00_AT9Ejg_l3rNsyY8DVGxtNa7cZi2Zh-deMnDI6E1TyWoYcQ&oe=631F84A0`} className="h-10 w-10 rounded-[50%] prose" />
                        </div>

                        <div className="px-1 py-1">
                            <div className="font-bold">author</div>
                            <div></div>
                        </div>
                    </div>
                    {/* editor */}
                    <form className="h-[200px]">
                    <div className="w-full overflow-y-scroll  bg-gray-100 font-sans " ref={quillRef} ></div>
                    <div className="w-full ">
                        <button type="submit" className="w-full bg py-1 px-2 rounded-xl bg-blue-600 text-white">Appliquer Mofication</button>
                    </div>
                    </form>
                    
                </div>


            </div>
        </div>
    );
}

export default UpdatePost
