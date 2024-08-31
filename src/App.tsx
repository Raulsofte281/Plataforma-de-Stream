/* assets */
import Background from '@/assets/Background.svg'
import bell from '@/assets/bell.svg'
import search from '@/assets/search.svg'



export function App(){
    return (
        <>
    <div className="bg-[url('./assets/Background.svg')]">
        <div>
            <ul className="flex justify-between text-base  font-[Poppins] text-white">
                
                <ul className='flex gap-5 font-medium'>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Documentaries</li>
                </ul>

                    <ul className='flex'>
                        <img src={search}/>
                        <img src={bell} />
                    </ul>
            </ul>

            
        </div>
    </div>
        </>
    );
}