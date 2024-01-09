// import cars from '../data/cars.json';
import cars from '@/data/cars.json';
import maker from '@/data/makes.json'

export const useCars = () => {
    return {
        cars,
        maker: maker
    }
}
