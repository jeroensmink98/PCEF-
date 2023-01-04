import { pb } from "./Pocketbase";


export async function fetchSchools(){
    try{
        const resultList = await pb.collection('school').getFullList();
        return resultList;
    }catch(err){
        console.log(err);
    }

}