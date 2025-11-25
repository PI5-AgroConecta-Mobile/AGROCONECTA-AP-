import { Request, Response } from 'express';
import { prisma } from '../../database/index';
import logger from '../../utils/logger';
import { hash } from 'bcryptjs';

export class UpdateUser {
    async handle(req: Request, res: Response) {
        const { name, email, password, imgUrl, contact, contactType, farmName, latitude, longitude } = req.body;
        const userId = req.userId;

        try {
            const userExists = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!userExists) {
                logger.warn(`User update attempt failed: User not found [ID: ${userId}]`);
                return res.status(404).json({ err: 'User not found' });
            }

            if (email && email !== userExists.email) {
                const emailInUse = await prisma.user.findUnique({
                    where: { email },
                });

                if (emailInUse) {
                    return res.status(400).json({ err: 'This email is already in use.' });
                }
            }

            const dataToUpdate: any = {};
            if (name) dataToUpdate.name = name;
            if (email) dataToUpdate.email = email;
            if (imgUrl) dataToUpdate.imgUrl = imgUrl;
            if (contact) dataToUpdate.contact = contact;
            if (contactType) dataToUpdate.contactType = contactType;
            
            // Novos campos
            if (farmName) dataToUpdate.farmName = farmName;
            if (latitude !== undefined) dataToUpdate.latitude = parseFloat(latitude);
            if (longitude !== undefined) dataToUpdate.longitude = parseFloat(longitude);

            if (password) {
                dataToUpdate.password = await hash(password, 8);
            }

            const updatedUser = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: dataToUpdate,
                select: { 
                    id: true,
                    name: true,
                    email: true,
                    imgUrl: true,
                    contact: true,
                    contactType: true,
                    createDate: true,
                    farmName: true,
                    latitude: true,
                    longitude: true
                }
            });

            logger.info(`User updated: ${userId}`);
            return res.status(200).json(updatedUser);

        } catch (err) {
            let errorMessage = 'Internal server error while updating user';
            if (err instanceof Error) {
                errorMessage = err.message; 
            }
            
            logger.error(`Error updating user [ID: ${userId}]: ${errorMessage}`);
            return res.status(500).json({ err: errorMessage });
        }
    }
}