import axios from 'axios'

export  class apiFireBase{
    private url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'
    public domen = 'http://localhost:3000'
 
    public async sendPost(params, body){
        console.log('webApi inside')
        return await axios.post(`${this.url}/${params}`, body)
    }
    public async GetPost(id){
        return await axios.get(`${this.url}/notes/${id}.json`)
    }
}

