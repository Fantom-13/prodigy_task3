const express = require('express');
const connectDB = require('./backend/config/db');
const productRoutes = require('./backend/routes/productRoutes');
const cartRoutes = require('./backend/routes/cartRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('backend/uploads'));

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
