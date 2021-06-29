import axios from 'axios';

class ScheduleService {
    addSchedule(obj){
        return axios.post('http://localhost:8081/fms/schedule/addschedule', obj);
    }

    viewAll(){
        return axios.get('http://localhost:8081/fms/schedule/viewall');
    }

    viewById(id){
        return axios.get('http://localhost:8081/fms/schedule/viewbyid/' + id);
    }

    delete(id){
        return axios.delete('http://localhost:8081/fms/schedule/delete/' + id);
    }

    update(obj){
        return axios.put('http://localhost:8081/fms/schedule/update', obj);
    }

    viewBySrcAndDest(source, destination){
        return axios.get('http://localhost:8081/fms/schedule/viewbysrcanddest/'+source+'/'+destination);
    }
}

export default new ScheduleService;