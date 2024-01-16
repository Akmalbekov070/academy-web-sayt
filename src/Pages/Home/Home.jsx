import img from '../../Assets/Images/3d.png';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import AboutCard from '../../Components/AboutCard/AboutCard';
export const Home = () => {
	return (
		///justify o'chiriladi
		<>
			<div className='w-full flex  absolute top-20 md:top-28 left-0 px-24  text-white'>
				<div className='w-full flex flex-col   pt-28'>
					<div className=' text-[45px]  py-2'>Avtomagnitola CarFly M320</div>
					<p className='w-[50%] text-[18px] leading-6 '>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores modi enim earum in, veniam saepe. Accusamus ipsum
						corporis omnis molestias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, repudiandae.
					</p>
					<div className='py-4 relative  z-10'>
						{/* <button class=' relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-8 w-20 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold'>
							<div class='absolute z-10 w-28 h-28 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75'></div>
							<div class='absolute z-10 w-20 h-20 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100'></div>
							<div class='absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150'></div>
							<div class='absolute z-10 w-10 h-12 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200'></div>
							<div class='absolute z-10 w-5 h-10	 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300'></div>
							<p class='z-40 text-[8px]'>learn more</p>
						</button> */}
						<button className='w-[180px] py-4 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]  border border-1  text-[20px] rounded-xl   '>
							{' '}
							Learn more
						</button>
					</div>
				</div>
				<div className='w-[0%] '>
					<img className='w-[500px' src={img} alt='' />
				</div>
			</div>
			{/* googlMap =====  page*/}
			<div className='relative'>
				<AboutCard />
				<GoogleMap />
			</div>
		</>
	);
};
