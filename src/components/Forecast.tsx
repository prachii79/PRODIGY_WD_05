import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";

  const WEEK_DAYS =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Forecast({data}){

    const dayInAWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

    return(
        <>
            <label className="text-2xl font-bold">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                   <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="bg-[#f5f5f5] rounded-2xl h-10 m-2 items-center flex text-sm py-2 px-5 cursor-pointer ">
                                    <img src={`/icons/${item.weather[0].icon}.png`} alt="weather" className="w-10" />
                                    <label className="flex flex-1 text-[#212121] ml-4 font-semibold">{forecastDays[index]}</label>
                                    <label className="flex flex-1 mr-4 text-right">{item.weather[0].description}</label>
                                    <label className="text-[#757575]">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
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