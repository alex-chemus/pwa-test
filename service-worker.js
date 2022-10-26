import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
//import { CacheFirst } from 'workbox-strategies'

precacheAndRoute(self.__WB_MANIFEST);

/*registerRoute(new Route(
  ({ request, sameOrigin }) => {
    return sameOrigin || request.url.startsWith('http://fonts.googleapis.com')
  },
  new CacheFirst()
))*/

const matchCallback = ({ url }) => {
  return url.origin !== 'https://alex-chemus.github.io'
}

const handlerCallback = async ({ request }) => {
  console.log('handle fetch request')
  try {
    const response = await fetch(request)
    return response
  } catch (error) {
    console.log('failed to fetch')
    return new Response(JSON.stringify({
      status: 'offline'
    }))
  }
}

registerRoute(matchCallback, handlerCallback)