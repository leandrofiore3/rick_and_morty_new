import Card from './Card';
import React from 'react';

export default function Cards(props) {
   return (<div>
      {props.characters.map((character) => {
         return <Card key={character.id} {...character} onClose={() => alert('Emulamos que se cierra la card')} />;
      })}

   </div>);
}
