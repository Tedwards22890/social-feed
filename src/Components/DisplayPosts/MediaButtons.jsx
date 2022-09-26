import React, { useState } from 'react';


const MediaButtons = () => {

    let [likeNumber, setLikeNumber] = useState(0);
    let [disLikeNumber, setDisLikeNumber] = useState(0);

    function handleLikeClick() {
        if (disLikeNumber>0)
        {
            return(
                setLikeNumber(likeNumber+=1),
                setDisLikeNumber(disLikeNumber-=1)
            )
        }
        else{
            setLikeNumber(likeNumber+=1)
        }

    }
    function handleDisLikeclicked() {
        if (likeNumber>0)
        {
            return(
                setLikeNumber(likeNumber-=1),
                setDisLikeNumber(disLikeNumber+=1)
            )
        }
        else{
            setDisLikeNumber(disLikeNumber+=1)
        }

    }
    return(
        <div>
            <button onClick={handleLikeClick}>Like - {likeNumber}</button>
            <button onClick={handleDisLikeclicked}>Dislike - {disLikeNumber}</button>
        </div>

    )
}

export default MediaButtons;