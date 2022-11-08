import fs from 'fs';
import fetch from 'node-fetch';

const access_token = process.argv[2];

const getAccessToken = async (id) => {
    let device_id = createRandomId();
    let res = await fetch('https://api.kamyroll.tech/auth/v1/token', {
        method: 'POST',
        body: new URLSearchParams({
            'device_id': device_id,
            'device_type': 'com.something.crunchyroll',
            'access_token': access_token
        })
    }).then((res) => res.json())

    fs.writeFileSync("welp.json", JSON.stringify(res))
};


getAccessToken();


function createRandomId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 16; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
