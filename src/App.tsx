import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

/* assets */
import Background from '@/assets/Background.svg'
import bell from '@/assets/bell.svg'
import Heart from '@/assets/Heart.svg'
import search from '@/assets/search.svg'
import FunxArts from '@/assets/FunxArts.jpeg'
import kimetsu from '@/assets/kimetsu.svg'
import bleach from '@/assets/bleach.svg'
import Blackcover from '@/assets/Blackcover.svg'

function App() {
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
                        <li className='flex items-center gap-1'><img className='rounded-full size-8 ' src={FunxArts}/>Warrior</li>
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

    <div className='bg-[#303030] w-full h-full font-[Poppins] p-2 pb-20 max-sm:pb-28'>
    <h1 className="text-white font-semibold text-xl flex justify-center">Trending</h1>
        <div className="flex justify-center gap-16 flex-wrap mt-8 ">
            <Card className="bg-[url('./assets/kimetsu.svg')] bg-cover w-full  h-full flex justify-end" tittle='Demon slayer' SubTittle="2019 || Adventure"/>
            <Card className="bg-[url('https://i.pinimg.com/originals/a3/cd/37/a3cd3714d39c9585f944676969548cd4.jpg')]
            bg-cover rounded-xl max-sm:mt-10 w-full  h-full flex justify-end"
            tittle='Jujutsu Kaisen'
            SubTittle='2018 || dark fantasy'/>
            <Card className="bg-[url('./assets/bleach.svg')] bg-cover w-full max-sm:mt-20  h-full flex justify-end"
            tittle='Bleach'
            SubTittle='2011 || Fantasy'/>
            <Card className="bg-[url('./assets/Blackcover.svg')] bg-cover w-full max-sm:mt-20   h-full flex justify-end"
            tittle='Black cover'
            SubTittle='2015 || Magic'
            />
        </div>
    </div>
    </>
  );
}

export default App;