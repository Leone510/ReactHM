import React from 'react';
import Users from './Users/Users.jsx';
import Registration from './Registration/Registration.jsx'
import InfoData from './InfoData/InfoData.jsx'

const ActiveCompetition = () => {
   return (
      <div className="activeCompetition">
         <main>
            <Users/>
         </main>
         <section >
            <Registration/>
            <InfoData/>
         </section>
      </div>
    );
}

export default ActiveCompetition;