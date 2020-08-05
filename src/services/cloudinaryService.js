export function uploadImg(ev) {
    const CLOUD_NAME = 'dbuietnse'; // find it in your cloudinary account (main page)
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', ev.target.files[0]);
    formData.append('upload_preset', 'wnfp0r0e'); // second parameter is the upload preset (you can find it in cloudinary settings)

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res;
        })
        .catch(err => console.error(error))
}
