import api from '../contants/api'
export const courseService = {
    getList() {
        return api.get('/elearning/v4/courses')
    },
    getDetail(id){
        return api.get(`/elearning/v4/courses/${id}`)
    }
}
