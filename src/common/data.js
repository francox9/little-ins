import sample from './test.json'

const Services = {
    get: () => new Promise((resolve) => resolve(sample))
}


export default Services