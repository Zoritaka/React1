import React from "react";
import './style.css';
const MyBand = () => {
    return(
        <div class='block'>
            <ul>
                <li>Название группы: Slipknot</li>
                <li>Участники: Shawn Crahan, Corey Taylor, Mick Thomson,<br/> Craig Jones, Jim Root, Sid Wilson, Chris Fehn, Joey Jordison</li>
                <li>Жанры: Alternative Metal, Heavy Metal, Nü Metal, Rap-Metal</li>
                <li>Альбомы:</li>
                <div>
                    <ol>
                        <li>Slipknot: June 29, 1999</li>
                        <img src="https://rovimusic.rovicorp.com/image.jpg?c=5jGWcSit2zbwxWaVhRVJst_M69_UI9rrJSVvWL2-yAg=&f=4" width={100} height={100}></img>

                        <li>IOWA:  August 28, 2001</li>
                        <img src="https://rovimusic.rovicorp.com/image.jpg?c=B0ZmNCXFiA_6iT_E1bJeqipQg_7iAU1wjqLgK_xGXts=&f=4" width={100} height={100}></img>

                        <li>Vol. 3: The Subliminal Verses:  May 25, 2004</li>
                        <img src="https://rovimusic.rovicorp.com/image.jpg?c=jHkiulVbTCi54VrskyfO4hyhM-OFI8zG4l-qVpXXB1I=&f=4" width={100} height={100}></img>
                    </ol>
                </div>
            </ul>
        </div>
    );
}

export default MyBand;