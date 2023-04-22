import React from 'react'
import './Desktop1.css'
import ImgAsset from '../public'
export default function Desktop1 () {
	return (
		<div className='Desktop1_Desktop1'>
			<span className='WelcomebackUSERNAME'>Welcome back,<br/>[USERNAME]</span>
			<img className='image1' src = {ImgAsset.Desktop1_image1} />
			<div className='Search'>
			</div>
			<div className='Header'>
				<div className='Logout'>
					<span className='LogOut'>Log Out</span>
				</div>
				<div className='Home'>
					<span className='Home_1'>Home</span>
				</div>
				<span className='Logo'>FlashMate</span>
			</div>
			<div className='Flashcards'>
				<div className='Flashcard3'>
					<div className='Frame8'>
						<img className='image4' src = {ImgAsset.Desktop1_image4} />
						<img className='image5' src = {ImgAsset.Desktop1_image5} />
					</div>
					<span className='DNA'>DNA</span>
				</div>
				<div className='Flashcard2'>
					<div className='Frame8_1'>
						<img className='image3' src = {ImgAsset.Desktop1_1_image3} />
					</div>
					<span className='Cells'>Cells</span>
				</div>
				<div className='Flashcard1'>
					<div className='Frame'>
						<img className='image2' src = {ImgAsset.Desktop1_image2} />
					</div>
					<span className='Anatomy'>Anatomy</span>
				</div>
				<div className='LoadMore'>
					<span className='LoadMore_1'>Load More</span>
				</div>
			</div>
		</div>
	)
}