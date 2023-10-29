import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellat veritatis fuga, cum quaerat inventore, autem architecto cupiditate ullam, libero nam voluptas voluptatibus delectus! Alias asperiores quam error cumque aut.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste deserunt molestias, quo aperiam reiciendis facere ratione autem animi. Animi, soluta?</p>
            </div>
        </div>
    )
}

export default DescriptionBox
