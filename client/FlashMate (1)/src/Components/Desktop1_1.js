import React from 'react'
import './Desktop1_1.css'
import ImgAsset from '../public'
export default function Desktop1_1 () {
	return (
		<div className='Desktop1_1_Desktop1'>
			<div className='Body'>
				<div className='MainFlashcardPlaceholder'>
					<span className='PlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertextPlaceholdertext'>Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text.  </span>
				</div>
				<div className='Progress'>
					<span className='YourProgressStudiedXOutofXXMasteredXXXLearningXXXXChallengeXXXXXTimeinSessionXXXX'>Your Progress<br/><br/><br/><br/><br/>Studied<br/>X<br/><br/>Out of<br/>XX<br/><br/><br/>Mastered<br/>XXX<br/><br/>Learning<br/>XXXX<br/><br/>Challenge<br/>XXXXX<br/><br/><br/><br/><br/><br/>Time in  Session<br/>XX:XX</span>
					<img className='image6' src = {ImgAsset.Desktop1_1_image6} />
					<div className='Frame8'>
						<img className='image3' src = {ImgAsset.Desktop1_1_image3} />
					</div>
				</div>
				<div className='ButtonMaster'>
					<span className='Mastered'>Mastered</span>
				</div>
				<div className='ButtonLearning'>
					<span className='Good'>Good</span>
				</div>
				<div className='ButtonNeedPractice'>
					<span className='NeedPractice'>Need Practice</span>
				</div>
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
		</div>
	)
}