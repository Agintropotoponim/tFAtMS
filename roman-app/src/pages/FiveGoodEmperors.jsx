import React, {useState} from 'react';
import pius from '../img/pius.jpg'
import nerva from '../img/nerva.jpg'
import traianus from '../img/traianus7.jpg'
import hadrianus from '../img/hadrianus.jpg'
import aurelius from '../img/marcusaurelius.jpg'
import Modal from '../components/UI/Modal/Modal';
import '../styles/emperors.css'
import nervams from '../components/text'

function FiveGoodEmperors() {

    const [modal, setModal] = useState(false)

    function changeModal(setModal){
        
        setModal(true)
    }


    return ( 
        <div className='content'>
            <div className='block'>
                <div className='block__column'>
                    <div className='block__item'>
                        <div className='align__center'>
                            <img onClick={()=>setModal(true)} src={nerva} alt='Nerva'/>
                        </div>
                        <div className='image__text'><span >Marcus Cocceius Nerva<br/>The 1st Good Emperor</span></div>
                    </div>
                </div>
                <div className='block__column'>
                    <div className='block__item'>
                        <div className='align__center'>
                            <img onClick={()=>setModal(true)} src={traianus} alt='Traianus'/>
                        </div>
                            <div className='image__text'><span>Marcus Ulpius Nerva Traianus<br/>The 2nd Good Emperor</span></div>
                    </div>
                </div>
                <div className='block__column'>
                    <div className='block__item'>
                        <div className='align__center'>
                            <img src={hadrianus} alt='Hadrianus'/>
                        </div>
                        <div className='image__text'><span>Publius Aelius Traianus Hadrianus<br/>The 3rd Good Emperor</span></div>
                    </div>
                </div>
                <div className='block__column'>
                    <div className='block__item'>
                        <div className='align__center'>
                            <img src={pius} alt='Antoninus Pius'/>
                        </div>
                        <div className='image__text'><span>Titus Aurelius Fulvus Boionius Arrius Antoninus Pius<br/>The 4th Good Emperor</span></div>
                    </div>
                </div>
                <div className='block__column'>
                    <div className='block__item'>
                        <div className='align__center'>
                            <img  src={aurelius} alt='Marcus Aurelius'/>
                        </div>
                        <div className='image__text'><span>Marcus Aurelius Antoninus<br/>The last Good Emperor</span></div>
                    </div>
                </div>
            </div>

            <Modal active={modal} setActive={setModal}>
                <nervams/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro aut ab possimus quis eius nesciunt enim tempore assumenda quisquam dignissimos reiciendis voluptatem. Sequi, doloremque quae. Dicta sit quo ex.
            </Modal>
        </div>
     );
}

export default FiveGoodEmperors;