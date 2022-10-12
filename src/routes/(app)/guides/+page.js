import { error } from "@sveltejs/kit";

export async function load({data}) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const guides = await res.json()
        if (res.ok) {
            return {
                guides
            }
        } 
    } catch (e) {
        throw error(404, 'Could not fetch guides');
    }
    
    
    
}