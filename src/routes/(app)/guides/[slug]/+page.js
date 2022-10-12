import { error, redirect } from '@sveltejs/kit';
 
export async function load({ params, data }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    const guide = await res.json()
    
    if (res.ok) {
        return {
            guide
        };
    }
    
    throw redirect(307, '/guides');
}