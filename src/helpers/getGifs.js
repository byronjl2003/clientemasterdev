export const getGifs = async(parametro) => {
    const url = 'http://34.70.104.102:3001/prueba/10';
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    return data;
}