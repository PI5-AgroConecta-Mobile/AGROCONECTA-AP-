import { Request, Response } from 'express'
import { prisma } from '../../database/index'

export class ListFarms {
    async handle(req: Request, res: Response) {
        try {
            const { lat, long } = req.query
            const farms = await prisma.user.findMany({
                where: {
                    latitude: { not: null },
                    longitude: { not: null }
                },
                select: {
                    id: true,
                    name: true,
                    farmName: true,   
                    imgUrl: true,
                    latitude: true,   
                    longitude: true,  
                    rate: true,
                    contact: true
                }
            })

            if (lat && long) {
                const userLat = parseFloat(lat as string)
                const userLon = parseFloat(long as string)
                const farmsWithDistance = farms.map(farm => {
                    const farmLat = farm.latitude!
                    const farmLon = farm.longitude!
                    
                    const R = 6371 
                    const dLat = (farmLat - userLat) * (Math.PI / 180)
                    const dLon = (farmLon - userLon) * (Math.PI / 180)
                    const a = 
                        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(userLat * (Math.PI / 180)) * Math.cos(farmLat * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
                    const distance = R * c
                    return { ...farm, distance }
                })

                farmsWithDistance.sort((a, b) => a.distance - b.distance)
                return res.status(200).json(farmsWithDistance)
            }

            return res.status(200).json(farms)

        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: "Error listing farms" })
        }
    }
}