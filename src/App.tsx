/* assets */
import Background from '@/assets/Background.svg';
import bell from '@/assets/bell.svg';
import search from '@/assets/search.svg';
import FunArts from '@/assets/FunxArts.jpeg';
import Heart from '@/assets/Heart.svg';
/* Componetes */
import { Button } from '@/components/ui/button'


export function App(){
    return (
        <>
    <div className="bg-[url('./assets/Background.svg')] h-full w-full p-2">
        <div>
            <ul className="flex flex-wrap justify-between text-base  font-[Poppins] text-white">
                
                <ul className='flex gap-5 text-wrap font-medium p-1'>
                    <li className=''>Movies</li>
                    <li>Series</li>
                    <li>Documentaries</li>
                </ul>
                
                    <ul className='flex gap-3 items-center'>
                        <img  className='size-6' src={search}/>
                        <img  src={bell} />
                        <li className='flex items-center gap-1'><img className='rounded-full size-8 ' src={FunArts}/>Warrior</li>
                    </ul>
            </ul>
        </div>
        {/* Botoes, insider, e paragrafos */}
        <div className='mt-20'>
            <p className='text-white text-5xl font-[Poppins] font-medium'>Insider</p>
            <p className='font-[Poppins] text-white text-sm font-light  mt-4'>2022 | Comedy horror | 1 Season</p>
            {/* div englobando os botoes */}
            <div className='flex gap-3 mt-4 items-center'>
                <Button
                variant={'default'}
                className='rounded-xl p-6 text-base font-medium text-white bg-purple-700'>Watch now
                </Button>
                <Button 
                variant={'outline'} 
                className='rounded-2xl size-[50px] bg-gradient-to-r from-[#FFFFFF] to-gray-300'><img src={Heart} className='size-full '/></Button>
            </div>
        </div>
        
    </div>

    <div className='bg-[#303030] w-full h-full'>
a
    </div>
        </>
    );
}