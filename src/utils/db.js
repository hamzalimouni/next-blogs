import mongoose from 'mongoose';

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        throw new Error(`Connection failed \n${error}`);
    }
}

export default connect;