import { pb } from "./Pocketbase";


export async function fetchTeachers(){
    try{
        const resultList = await pb.collection('teacher').getFullList();
        return resultList;
    }catch(err){
        console.log(err);
    }
}