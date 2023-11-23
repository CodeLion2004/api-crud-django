import axios from 'axios'

const studenAPI = axios.create({
    baseURL: 'http://localhost:8000/django/api/v1/estudiante/'
})


export const getAllStudents = () => {
    return studenAPI.get('/')
    
}

export const CreateStudent = (estudiante) =>{
    return studenAPI.post('/', estudiante)

}