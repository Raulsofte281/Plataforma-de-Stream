/* assets */
import Background from '@/assets/Background.svg'
import bell from '@/assets/bell.svg'
import search from '@/assets/search.svg'
import FunArts from '@/assets/FunxArts.jpeg'



export function App(){
    return (
        <>
    <div className="bg-[url('./assets/Background.svg')] h-full w-full p-2">
        <div>
            <ul className="flex justify-between text-base  font-[Poppins] text-white">
                
                <ul className='flex gap-5 text-wrap font-medium p-1'>
                    <li className=''>Movies</li>
                    <li>Series</li>
                    <li>Documentaries</li>
                </ul>
                
                    <ul className='flex gap-3'>
                        <img  src={search}/>
                        <img  src={bell} />
                        <li className='flex items-center gap-1'><img className='rounded-full size-8 ' src={FunArts}/>Warrior</li>
                    </ul>
            </ul>
        </div>
        <p className='text-white text-5xl font-[Poppins] font-medium'>Insider</p>
        <p className='font-[Poppins] text-white text-sm font-light'>2022 | Comedy horror | 1 Season</p>
    </div>

    <div className='bg-[#303030] w-full h-full'>
a
    </div>
        </>
    );
}