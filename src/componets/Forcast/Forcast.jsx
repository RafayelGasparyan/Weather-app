import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAY = ["Mondey","Tuesday","Wednesday","Thuresday","Friday","Saturday","Sunday"];
 export const Forcast = ({data}) => {
   const dainInaWeek = new Date().getDay()
  const forecaseDay =  WEEK_DAY.slice(dainInaWeek,WEEK_DAY.length).concat(WEEK_DAY.slice(0,dainInaWeek))
  console.log(forecaseDay)
  return (
    <>
   
   <label className='title'>Daitly</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx)=> (
                 <AccordionItem key={idx}>
                 <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className='imgWeather'>
                        <img style={{width:'50px'}} src='image/sunny.jpg'/>
                        <label className='day'>{forecaseDay[idx]}</label>
                        <label className='description'>{item.weather[0].description}</label>
                        <label className='min-max'>{Math.round(item.main.temp_min)}°c / {Math.round(item.main.temp_max)}°c</label>
                    </div>
                    </AccordionItemButton>
                 </AccordionItemHeading>
                 <AccordionItemPanel></AccordionItemPanel>
             </AccordionItem>
            ))}
        </Accordion>
    </>
  )
}
