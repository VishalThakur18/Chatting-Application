import React from 'react' 

const ConfirmationModal = ({modalData}) => {  

  return (
    <div className='Modal'>
        <div>
            <p>{modalData.text1}</p>
            <p>{modalData.text2}</p>
            <div>
                <button  
                    onclick={ 
                        modalData?.btn1Handler
                    }
                    text={modalData?.btn1Text}
                /> 
                <button
                    onClick={modalData.btn2Handler}>
                    {modalData?.btn2Text}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal