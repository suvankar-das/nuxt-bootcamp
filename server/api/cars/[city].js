import cars from '@/data/cars.json'
export default defineEventHandler((event)=>{
    const {city} = event.context.params;
    let filteredCar = cars;
    filteredCar = filteredCar.filter((c)=>c.city.toLowerCase()==city.toLowerCase());
    return filteredCar;
})
