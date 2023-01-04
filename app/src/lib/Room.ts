import { pb } from "./Pocketbase";


export async function fetchRooms(){
    try{
        const resultList = await pb.collection('room').getFullList();
        return resultList;
    }catch(err){
        console.log(err);
    }
}