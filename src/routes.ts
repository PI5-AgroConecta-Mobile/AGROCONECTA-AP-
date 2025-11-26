import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { prisma } from './database'; // Necessário para salvar a URL da foto no banco

import { Login } from './controllers/users/Longinho';
import { CreateUser } from './controllers/users/CreateUser'
import { UpdateUser } from './controllers/users/UpdateUser';
import { ConfirmEmail } from './controllers/users/ConfirmEmail';
import { DeleteUser } from './controllers/users/DeleteUser';
import { GetUser } from './controllers/users/GetUser';
import { UpdatePassword } from './controllers/users/UpdatePassword';
import { ListUsers } from './controllers/users/ListUsers';
import { SearchUsers } from './controllers/users/SearchUser';

import { createProduct } from './controllers/products/createProduct'
import { ListProducts } from './controllers/products/ListProducts'
import { UpdateProduct } from './controllers/products/UpdateProduct'
import { GetProductById } from './controllers/products/GetProductById'
import { DeleteProduct } from './controllers/products/DeleteProduct';
import { ListMyProducts } from './controllers/products/ListMyProducts';

// Importações de Agendamento
import { CreateAgendamento } from './controllers/Agendamentos/CreateAgendamento';
import { ListAgendamentosCliente } from './controllers/Agendamentos/ListAgendamentosCliente';
import { ListAgendamentosFarmer } from './controllers/Agendamentos/ListAgendamentosFarmer';
import { UpdateAgendamentoStatus } from './controllers/Agendamentos/UpdateAgendamentoStatus';

// Importação do Middleware
import midAthorization from './middleware/Authorization'; 

import { ListConversations } from './controllers/chat/ListConversations';
import { ListMessages } from './controllers/chat/ListMessages';
import { GetOrCreateConversationWithUser } from './controllers/chat/GetOrCreateConversationWithUser';
import { ListFarms } from "./controllers/users/ListFarms"; 

const router: Router = Router()
const upload = multer(multerConfig); // Inicializa o upload

const login = new Login()
const createUser = new CreateUser()
const updateUser = new UpdateUser()
const confirmEmail = new ConfirmEmail()
const deleteUser = new DeleteUser()
const getUser = new GetUser()
const updatePassword = new UpdatePassword()
const listUsers = new ListUsers()
const searchUsers = new SearchUsers()

const createProductt = new createProduct()
const listProducts = new ListProducts()
const updateProduct = new UpdateProduct()
const getProductById = new GetProductById()
const deleteProduct = new DeleteProduct()
const listMyProducts = new ListMyProducts()

// Instâncias de Agendamento
const createAgendamento = new CreateAgendamento();
const listAgendamentosCliente = new ListAgendamentosCliente();
const listAgendamentosFarmer = new ListAgendamentosFarmer();
const updateAgendamentoStatus = new UpdateAgendamentoStatus(); 

// Chat
const listConversations = new ListConversations()
const listMessages = new ListMessages()
const getOrCreateConversationWithUser = new GetOrCreateConversationWithUser()

router.post('/login', login.handle)
router.post('/createUser', createUser.handle)
router.put('/updateUser', midAthorization, updateUser.handle)
router.post('/confirmEmail', confirmEmail.handle)
router.delete('/deleteUser/:id', midAthorization, deleteUser.handle)
router.get('/getUser/:id', getUser.handle)
router.put('/updatePassword', updatePassword.handle)
router.get('/users', midAthorization, listUsers.handle)
router.get('/users/search', midAthorization, searchUsers.handle)

// --- NOVA ROTA DE UPLOAD DE FOTO DE PERFIL ---
router.patch('/user/avatar', midAthorization, upload.single('avatar'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ err: 'Nenhuma imagem enviada.' });
        }
        
        // Salva apenas o nome do arquivo no banco. 
        // O front-end concatenará com a URL base (ex: http://ip:3333/nome.jpg)
        const fileName = req.file.filename; 
        
        const updatedUser = await prisma.user.update({
            where: { id: req.userId },
            data: { imgUrl: fileName },
            select: { id: true, name: true, email: true, imgUrl: true, userType: true }
        });

        return res.json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ err: "Erro ao atualizar foto de perfil" });
    }
});
// ---------------------------------------------

router.post('/createProduct', midAthorization, createProductt.handle)
// A rota de listagem já foi atualizada no Controller para aceitar filtros (ownerId, preço, etc)
router.get('/listProduct', listProducts.handle)
router.get('/myproducts', midAthorization, listMyProducts.handle) 
router.put('/updateProduct', midAthorization, updateProduct.handle)
router.get('/getProductById/:productId', getProductById.handle)
router.delete('/deleteProduct/:productId', midAthorization, deleteProduct.handle)

// Rotas de Agendamento
router.post('/createAgendamento', midAthorization, createAgendamento.handle) 
router.get('/myagendamentos/cliente', midAthorization, listAgendamentosCliente.handle) 
router.get('/myagendamentos/farmer', midAthorization, listAgendamentosFarmer.handle)
router.put('/updateAgendamentoStatus/:agendamentoId', midAthorization, updateAgendamentoStatus.handle) 

// Chat
router.get('/conversations', midAthorization, listConversations.handle)
router.get('/conversations/:conversationId/messages', midAthorization, listMessages.handle)
router.get('/conversations/with/:userId', midAthorization, getOrCreateConversationWithUser.handle)

router.get('/farms', midAthorization, new ListFarms().handle); 

export {router}