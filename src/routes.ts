import { Router } from 'express';
import { Login } from './controllers/users/Longinho';
import { CreateUser } from './controllers/users/CreateUser'
import { UpdateUser } from './controllers/users/UpdateUser';
import { ConfirmEmail } from './controllers/users/ConfirmEmail';
import { DeleteUser } from './controllers/users/DeleteUser';
import { GetUser } from './controllers/users/GetUser';
import { UpdatePassword } from './controllers/users/UpdatePassword';

import { createProduct } from './controllers/products/createProduct'
import { ListProducts } from './controllers/products/ListProducts'
import { UpdateProduct } from './controllers/products/UpdateProduct'
import { GetProductById } from './controllers/products/GetProductById'
import { DeleteProduct } from './controllers/products/DeleteProduct';

import midAthorization from './middleware/Authorization';



const router: Router = Router()

const login = new Login()
const createUser = new CreateUser()
const updateUser = new UpdateUser()
const confirmEmail = new ConfirmEmail()
const deleteUser = new DeleteUser()
const getUser = new GetUser()
const updatePassword = new UpdatePassword()

const createProductt = new createProduct()
const listProducts = new ListProducts()
const updateProduct = new UpdateProduct()
const getProductById = new GetProductById()
const deleteProduct = new DeleteProduct()

router.post('/login', login.handle)
router.post('/createUser', createUser.handle)
router.put('/updateUser', midAthorization, updateUser.handle)
router.post('/confirmEmail', confirmEmail.handle)
router.delete('/deleteUser/:id', midAthorization, deleteUser.handle)
router.get('/getUser/:id', getUser.handle)
router.put('/updatePassword', updatePassword.handle)

router.post('/createProduct', midAthorization, createProductt.handle)
router.get('/listProduct', listProducts.handle)
router.put('/updateProduct', midAthorization, updateProduct.handle)
router.get('/getProductById/:productId', getProductById.handle)
router.delete('/deleteProduct/:productId', midAthorization, deleteProduct.handle)


export {router}