import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const style = {
    width:"100%",
    aspectRatio:"21/9"
}

function Banner(){
    return(
        <div className='banner'>
            <div style ={center}>
                <img style={style} src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/12/20/86ee8becbc7359e059cbfee28561c4fb1703047793620634_original.jpg" alt="library"></img>
            </div>
        </div>
    )
}

export default Banner;