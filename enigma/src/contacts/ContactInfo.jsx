import React from 'react'

export default function ContactInfoApp() {
  return (
   <header className='contactWrapper'>
    <div >
        <h1 className='contUS'>CONTACT US</h1>
        <p className='toCont'>TO CONTACT US YOU CAN WRITE TO OUR EMAIL:</p>
        <p className='enigmaGmail'>enigmastudio.md@gmail.com</p>
    </div>
    <div>
        <p className='soMed'>SOCIAL MEDIA</p>
        
    </div>
    <div className='imageWrapper'>
    <a href="https://youtube.com/@enigmastudiomd?si=UClqqCRziR03d9gb" target="_blank" rel="noopener noreferrer">
        <img src='/img/image4.svg' />
    </a>
    <a href="https://www.instagram.com/enigmastudio.md?igsh=cW1nMDkzdXJnOTd1" target="_blank" rel="noopener noreferrer">
        <img src='/img/image5.svg' />
    </a>
</div>
   </header>
  )
}
