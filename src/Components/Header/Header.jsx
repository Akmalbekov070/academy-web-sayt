// Images
import Logo from '../../Assets/Images/Logo-2.png';
import { PiPhoneCall } from 'react-icons/pi';

export const Header = () => {
	return (
		//boshlanish qismi
		<div className='w-full h-14 backdrop-blur-sm px-4 fixed top-0 flex justify-between items-center z-50 md:px-20 '>
			{/* header chap qismi */}
			<div className='w-full flex items-center gap-2'>
				<img src={Logo} alt='' className='object-cover w-28  h-14' />
				<div className='bg-transparent outline-none cursor-pointer text-white text-[10px]'>Kurslar</div>
			</div>
			{/* header o'ng qismi */}
			<div className='w-full flex justify-end items-center text-[10px] gap-1'>
				<div className='text-[#FF0F87]  max-sm:hidden   text-[8px] sm:flex'>
					{/* [#FF0F87] */}
					{/* link========== */}
					<a href='/'>Ro‘yxatdan o‘tish</a>
				</div>
				<div className='relative'>
					<button className='relative border border-1 flex items-center gap-1 text-[#FF0F87] border-[#FF0F87] rounded-lg  py-2 px-4 text-[9px]'>
						<PiPhoneCall size='13' />
						+998913138989
					</button>
				</div>
				<div>
					<select className='bg-transparent outline-none text-white  text-[10px]'>
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
