const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const updateBanner = async (req, res) => {
    const result = await prisma.banner.update({
        data: {
            ...req.body
        },
        where: {
            id: 1
        }
    })
    // console.log(result);
    res.status(200).json({
        ...result
    })
}

const getBanner = async (req, res) => {
    const result = await prisma.banner.findFirst({
        where: {
            id: 1
        }
    })
    res.status(200).json(result);
}

module.exports = {updateBanner, getBanner}