import React from "react"

export default function CurrentWeather({data}){
    return(
        <div className="w-80 p-5 pt-0 rounded-md shadow-[10px_-2px_20px_2px_rgba(0,0,0,0.33)] text-white bg-[#333] mx-auto mt-5 mb-0">

            <div className="flex justify-between items-center">
                <div className="">
                    <p className="text-lg font-semibold leading-4 m-0 tracking-wider">{data.city}</p>
                    <p className="text-sm font-normal leading-4 m-0">{data.weather[0].description}</p>
                </div>
                <img src={`/icons/${data.weather[0].icon}.png`} alt="weather" className="w-24"/>
            </div>

            <div className="flex justify-between items-center">
                <p className="w-auto text-7xl font-semibold tracking-lighter my-2.5 mx-0">{Math.round(data.main.temp)}°C</p>

                <div className="w-full pl-8">
                    <div className="flex justify-between">
                        <span className="font-medium text-xs text-left mb-1 border-b">Details:</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-normal text-xs text-left">Feels like</span>
                        <span className="text-right font-semibold text-xs">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-normal text-xs text-left">Wind</span>
                        <span className="text-right font-semibold text-xs">{data.wind.speed}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-normal text-xs text-left">Humidity</span>
                        <span className="text-right font-semibold text-xs">{data.main.humidity}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-normal text-xs text-left">Pressure</span>
                        <span className="text-right font-semibold text-xs">{data.main.pressure}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
