export const getMessage = async(parametro) => {
    const url = `http://34.70.104.102:3001/message/${parametro}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    return data;
}