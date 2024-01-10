import cars from '@/data/cars.json'
export default defineEventHandler((event)=>{
    const {city} = event.context.params;
    // unlike path parameter , You cannot get that directly from event
    const {make,minPrice,maxPrice} = getQuery(event);
    let filteredCar = cars;
    filteredCar = filteredCar.filter((c)=>c.city.toLowerCase()==city.toLowerCase());
    if(make){
        filteredCar = filteredCar.filter((c) => c.make.toLowerCase() == make.toLowerCase());
    }
    if(minPrice){
        filteredCar = filteredCar.filter((c) => c.price>=parseInt(minPrice));
    }
    if (maxPrice) {
        filteredCar = filteredCar.filter((c) => c.price <= parseInt(maxPrice));
    }
    return filteredCar;
})
