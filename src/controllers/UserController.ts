import prisma from "../../prisma/client/index";

const getAll = async () => {
    try {
        const result = await prisma.user.findMany({ orderBy: { id: 'desc'} } );

        return {
            status: 'ok',
            message: 'success get all users',
            statusCode: 200,
            data: result,
        }
    } catch (error) {
        console.log(`error get all users : ${error}`);
    }
}

export {
    getAll
}