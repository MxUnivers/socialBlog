import React from 'react'

const Comments = () => {
  return (
    <div  className=" px-3 rounded-lg w-96 bg-white py-2 w-full shadow-sm">
       <div class="flex w-full border-t border-gray-100">
                <div class="mt-3 mx-5 flex flex-row text-xs">
                    <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div class="ml-1 text-gray-400 text-ms"> 30</div></div>
                    <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div class="ml-1 text-gray-400 text-ms"> 60k</div></div>
                </div>
                <div class="mt-3 mx-5 w-full flex justify-end text-xs">
                    <div class="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Likes: <div class="ml-1 text-gray-400  text-ms"> 120k</div></div>
                </div>
            </div>
            <div class="text-black p-4 antialiased flex">
                <img class="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200"/>
                <div>
                    <div class="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
                        <div class="font-semibold text-sm leading-relaxed">Sara Lauren</div>
                        <div class="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div class="text-xs  mt-0.5 text-gray-500">14 w</div>
                    <div class="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
                        <span class="text-sm ml-1 pr-1.5 text-gray-500">3</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Comments
