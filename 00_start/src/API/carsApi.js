import axios from 'axios';
const baseUrl = 'http://localhost:3050';

export const getAllCars = () => {
   axios.get(`${baseUrl}/api/cars`)
   .then((result) => {
       return result.data.map((i) => i);
   });
}

export const getCarById = (id) => {
    return axios.get(`${baseUrl}/api/cars`)
    .then((result) => {
        return result.data.map((i) => i)
            .find((c) => c.car_id === id);
    });
}

export const addCar = (car) => {
    return axios.post(`${baseUrl}/api/cars`, car);
};