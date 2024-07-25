import {db} from "./dexie";

const addItemToGioHang = async (name, quantity, price) => {
        db.giohang.add({name:name, quantity:quantity, price:price, totalPrice:price*quantity});
}


const getAllGioHang = async () => {
    return await db.giohang.toArray();
}

const deleteGioHang = async (id) => {
    db.giohang.delete(parseInt(id));
    return await db.giohang.toArray();
}

const getGioHangById = async (id) => {
    return await db.giohang.get(parseInt(id));
}
export {addItemToGioHang,getAllGioHang,getGioHangById,deleteGioHang}

