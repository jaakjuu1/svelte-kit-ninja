import { error } from '@sveltejs/kit';
 
export function load({ params }) {
  if (params.slug === 'vittu') {
    return {
      title: 'Kyrpää!',
      content: 'Pillujen pitää olla kauniissa päässä!',
      info: JSON.stringify(params)
    };
  }
 
  throw error(404, 'Not found');
}