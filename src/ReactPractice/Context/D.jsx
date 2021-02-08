import React from "react";
import { NameCont, ProfCont } from ".";

const D = () => {

  // For easy to use Context API
  const name2 = React.useContext(NameCont)
  const profession2 = React.useContext(ProfCont)
  return (<>

   <h6> <span className="text-warning">Easy</span> Name is a {name2} & He is a {profession2} </h6>

    <NameCont.Consumer>
      {(name) => (
        <ProfCont.Consumer>
          {(profession) => (
            <h6> <span className="text-warning">Little Complex</span> Name is a {name} & He is a {profession} </h6>
          )}
        </ProfCont.Consumer>
      )}
    </NameCont.Consumer>

  </>
)};

export default D;
