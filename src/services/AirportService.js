import axios from 'axios';
import React, { Component } from 'react';

class AirportService extends Component {
    addAirport(airObj){
        return axios.post('http://localhost:8081/fms/airport/addairport', airObj);
    }

    viewAllAirport(){
        return axios.get('http://localhost:8081/fms/airport/viewall');
    }

    viewById(id){
        return axios.get('http://localhost:8081/fms/airport/viewbyid/' + id);
    }

    delete(id){
        return axios.delete('http://localhost:8081/fms/airport/delete/' + id);
    }

    update(airObj){
        return axios.put('http://localhost:8081/fms/airport/update' , airObj);
    }
}

export default new AirportService;