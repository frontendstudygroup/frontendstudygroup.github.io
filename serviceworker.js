const CACHE_NAME = 'FRONTENDSTUDYGRPU{';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// Installing Service Worker
self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache);
        })
    )
})

// Listing Requests
self.addEventListener('fetch',(e)=>{
    e.respondWith(
        caches.match(e.request)
        .then(()=>{
            return fetch(e.request)
            .catch(()=>caches.match('offline.html'))
        })
    )
})

// Activate serviceworker
self.addEventListener('activate',e=>{
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    e.waitUntil(
        caches.keys()
        .then(cacheNames => Promise.all(
            cacheNames.map(cacheName=>{
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})