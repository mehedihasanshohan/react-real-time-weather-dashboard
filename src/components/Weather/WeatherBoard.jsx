// import { useWeather } from "../../hook"
// import AddToFavourite from "./AddToFavourite"
// import WeatherCondition from "./WeatherCondition"
// import WeatherHeadLine from "./WeatherHeadLine"

// const WeatherBoard = () => {
//   const {loading, error, weatherData} = useWeather();
//   console.log(loading, error, weatherData);
//   return (
//     <>
//         <div className="container">
// 				<div
// 					className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
// 					<div className="grid md:grid-cols-2 gap-10 md:gap-6">
// 						<AddToFavourite></AddToFavourite>
// 						<WeatherHeadLine></WeatherHeadLine>
// 						<WeatherCondition></WeatherCondition>
// 					</div>
// 				</div>

// 			</div>
//     </>
//   )
// }

// export default WeatherBoard