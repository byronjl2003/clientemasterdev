export const getGifs = async(key, secreto) => {
    console.log("SE VA A  GUARDAR UN SECRETO::", key, secreto)
    let requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: key, shared_secret: secreto })
    };

}