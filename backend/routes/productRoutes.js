const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getAllProducts, addProduct } = require('../controllers/productController');

const storage = multer.diskStorage({
  destination: './backend/uploads',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', getAllProducts);
router.post('/', upload.single('image'), addProduct);

module.exports = router;
