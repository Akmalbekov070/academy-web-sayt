// Images
import Logo from '../../Assets/Images/Logo-2.png';
import { PiPhoneCall } from 'react-icons/pi';

export const Header = () => {
	return (
		//boshlanish qismi
		<div className='w-full h-32 backdrop-blur-sm px-2 fixed top-0 flex justify-between items-center z-50 md:px-20 '>
			{/* header chap qismi */}
			<div className='w-full flex items-center gap-2'>
				<img src={Logo} alt='' className='object-cover w-[250px]  h-28' />
				<div className='bg-transparent outline-none cursor-pointer text-white text-[20px] '>Kurslar</div>
			</div>
			{/* header o'ng qismi */}
			<div className='w-full flex justify-end items-center text-[10px] gap-6'>
				<div className='text-pink-500  max-sm:hidden  text-[20px] sm:flex'>
					{/* [#FF0F87] */}
					{/* link========== */}
					<a href='/'>Ro‘yxatdan o‘tish</a>
				</div>
				<div className='relative'>
					<button className='relative border border-0.3 flex items-center gap-1 text-pink-500 border-pink-500 rounded-md  py-2 px-4 text-[20px]'>
						<PiPhoneCall size='23' />
						+998913138989
					</button>
				</div>
				<div>
					<select className='bg-transparent outline-none text-white  text-[20px]'>
						<option className='text-black ' value='Uzb'>
							Uzb
						</option>{' '}
						<option className='text-black ' value='Ru'>
							Ru
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};
// https://github.com/Akmalbekov070/Joylinks.git
