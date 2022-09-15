export const formatName = (name) => {
  const cutWhiteSpace = name.split(" ");

  const formatedName = cutWhiteSpace.map((fullName) => {
    return (
      fullName[0].toUpperCase() +
      fullName.slice(1, fullName.length).toLowerCase()
    );
  });

  return formatedName.join(" ");
};

export const cutName = (name) => {
  const whiteSpace = name.split(" ");

  return whiteSpace[0];
};
