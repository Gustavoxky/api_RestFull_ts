import * as mongoose from 'mongoose';
import newsSchema from '../models/newsSchema';

export default mongoose.model('news', newsSchema)