import React from "react";
const Footer = props => {
  const { Name, lastName } = props;
  const numeros = [1, 2, 3, 4, 5, 6, 7];
  const [uno, dos, tres] = numeros;
  const fullName = `name =  ${Name} ${lastName}`;
  return (
    <div className="footer">
      <p>{fullName}</p>
      <p> {uno}</p>
    </div>
  );
};

export default Footer;
