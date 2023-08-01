  const changeRandom = (lista) => {
  const indexRandom = Math.floor(Math.random() * lista.length);
  return lista[indexRandom];
}
export default changeRandom