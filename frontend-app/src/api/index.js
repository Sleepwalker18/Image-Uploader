export async function upload_image(file) {
    const fileToUpload = file[0];
    let data = new FormData();
    data.append('image', fileToUpload);
    
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/upload-image', {
            method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*'},
            mode: 'cors',
            body: data
        });
        return response.json();
    } catch (error) {
        return 'Hubo un problema con la petición Fetch:' + error.message;
    }
}