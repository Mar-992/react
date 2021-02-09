import React from 'react';

export function Domasna(props){
    console.log(props)

    return(
        <div id="domasna">
            <h2>Domasno</h2>
            {
                props.prikaziKorisnik && <div>
                 <p>Ime:{props.korisnik1.ime}</p>
                 <p>Username:{props.korisnik1.username}</p>
                 <p>Email:{props.korisnik1.email}</p>

                    </div>

            }

            {props.prikaziPrv === true ?
             <div>
                 <p>Ime:{props.korisnik1.ime}</p>
                 <p>Username:{props.korisnik1.username}</p>
                 <p>Email:{props.korisnik1.email}</p>
             </div>
             :
             <div>
                 <p>Ime:{props.korisnik2.ime} </p>
                 <p>Username:{props.korisnik2.username}</p>
                 <p>Email:{props.korisnik2.email}</p>
             </div>
           
             
                
            }
        </div>
    )
}