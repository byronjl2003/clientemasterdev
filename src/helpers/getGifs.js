export const getGifs = async(parametro) => {
    const url = 'http://localhost:3001/prueba/10';
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    return data;
}