import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
 
export const load = (({ locals }) => {
  // throw redirect(301, '/game/baduk')
  // goto("/game/baduk")
  // if (!locals.user) {
  //   throw redirect(307, "/game/baduk");
  // }
}) satisfies LayoutServerLoad;