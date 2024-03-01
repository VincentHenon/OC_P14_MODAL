import React from 'react'
import './styles/modal.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

/**
 * Modal component to display messages and actions in a modal popup.
 * 
 * @description This component renders a modal box that displays a message and optional buttons.
 * It can be used to show success messages, error messages, or any other type of notification.
 * 
 * @param {object} props - The props object.
 * @param {Function} props.handleClose - Function to handle closing the modal.
 * @param {Function} props.handleBtn1 - Function to handle button 1 click event.
 * @param {Function} props.handleBtn2 - Function to handle button 2 click event.
 * @param {boolean} props.isValid - Indicates whether the message is valid or not.
 * @param {string} props.textMainValid - Text to display when the message is valid.
 * @param {string} props.textMainError - Text to display when the message is an error.
 * @param {boolean} props.displayBtn1 - Indicates whether to display button 1.
 * @param {string} props.textBtn1 - Text to display on button 1.
 * @param {boolean} props.displayBtn2 - Indicates whether to display button 2.
 * @param {string} props.textBtn2 - Text to display on button 2.
 * 
 * @returns {JSX.Element} Modal component.
 */
export default function Modal({ handleClose, handleBtn1, handleBtn2, isValid, textMainValid, textMainError, displayBtn1, textBtn1, displayBtn2, textBtn2 }) {
    return (
        <div className='modalBackground' id='modal_bg' 
            onClick={(e) =>{ 
                if (e.target.className === "modalBackground") {
                    handleClose()
                }
            }}
        >
            <div className='modalBox' id='modal_box'>
                <div className='modalContent' id='modal_content'>
                    {isValid? 
                        <CheckCircleIcon className='modalIcon checkIcon' id='modal_icon' /> 
                    :
                        <ErrorIcon className='modalIcon errorIcon' id='modal_icon'/>}
                    <p className='modalText' id='modal_text'>{isValid? textMainValid : textMainError}</p>
                </div>
                <div className='modalButtonsWrapper' style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} id='modal_btns'>
                    {displayBtn1 && <button className='modalBtn modalBtn1' id='modal_btn1' onClick={handleBtn1}>{textBtn1}</button>}
                    {displayBtn2 && <button className='modalBtn modalBtn2' id='modal_btn2' onClick={handleBtn2}>{textBtn2}</button>}
                </div>
                <CloseRoundedIcon className='xMarkIcon modalIcon' id='modal_xmark' onClick={handleClose}/>
            </div>
        </div>
    )
}
