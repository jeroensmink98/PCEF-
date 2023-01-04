import {pb} from '$lib/Pocketbase';


export async function fetchLevels(){
    try{
        const resultList = await pb.collection('level').getFullList(200, {
            sort: 'level_name'
        });
        return resultList;
    }catch (err){
        console.log(err);
    }
}