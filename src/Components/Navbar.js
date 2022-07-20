import React from "react";

const NavbarStype = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "white",
  alignItems: "center",
  boxShadow: "0px 10px 5px 0px rgb(208, 204, 204",
  height: "50px",
};
const boutonAccueilStule = {
  backgroundColor: "#3d83df",
  color: "White",
  border: "none",
  borderRadius: "5px",
  fontWeight: "Bold",
  height: "30px",
  weight: "80px",
};

const seconfbotton = {
  ...boutonAccueilStule,
  backgroundColor: "#FF00F7",
  borderRadius: "20px",
};

function constNarbar() {
  const user = "Insaf Cherif";
  const userInTable = user.split(" ");
  const caracterOne = userInTable[0][0];
  const caracterTwo = userInTable[1][0];
  return (
    <div style={NavbarStype}>
      <button style={boutonAccueilStule}>Acceuil</button>
      <button style={seconfbotton}>{`${caracterOne} ${caracterTwo}`}</button>
    </div>
  );
}

export default constNarbar;
