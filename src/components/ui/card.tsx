import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

import kimetsu from '@/assets/kimetsu.svg'
import Heart from '@/assets/Heart.svg'

/* bg-[url('./assets/kimetsu.svg')] bg-cover w-full bg-[url('./assets/kimetsu.svg')] h-full flex justify-end*/

export function Card({className = '', tittle, SubTittle}: Props)  {
  return (
    <div className="w-[255px] h-[321px]">
      <div className={`${className}`}>
              <Button 
                  variant={'outline'} 
                  className='rounded-2xl m-2 size-[50px] bg-gradient-to-r from-[#FFFFFF] to-gray-300 '><img src={Heart} className='size-full'/>
              </Button>
              
      </div>
          <div className="bg-gradient-to-r from-[#FFFFFF] to-gray-300 w-full p-3 ">
              <h1 className="font-semibold text-base">{tittle}</h1>
              <p className="font-normal text-sm">{SubTittle}</p>
          </div> 
     
      
    </div>
    
  );
}