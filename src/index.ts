import fetch, { Headers, Request, Response } from 'node-fetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch as any
    globalThis.Headers = Headers as any
    globalThis.Request = Request as any
    globalThis.Response = Response as any
}

import { Fetcher } from 'openapi-typescript-fetch'

import { paths } from './presence'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly9lN2U2MzIzYi0zMjIyLTQzODEtODk0NC0zNGQwNzg5ZDI5YzAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85YmQ5YzRkYS02ODQ5LTRkNWEtYTZkMy00ZGVjMTJkMjg3OGIvIiwiaWF0IjoxNjU3NzkxNjU5LCJuYmYiOjE2NTc3OTE2NTksImV4cCI6MTY1Nzc5NjI4NSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQWR3bnIyaTNOMU1QR0syT1VkNnpXdmtCMUgzaDBSditad2VVMUYxZHprMVRuK1ZxMjBJZEc4aGlySjRwbE5YTlpCb29jdUJqRFNyZUNnb1YxQ0YxTThRbHhURzV3dlU1T0JxVko2QWh6YlFnPSIsImFtciI6WyJyc2EiLCJtZmEiXSwiYXBwaWQiOiJlN2U2MzIzYi0zMjIyLTQzODEtODk0NC0zNGQwNzg5ZDI5YzAiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlN0cm9uZyIsImdpdmVuX25hbWUiOiJOaWMiLCJpcGFkZHIiOiIyMDIuNzQuMjEyLjEwNiIsIm5hbWUiOiJOaWMgU3Ryb25nIiwib2lkIjoiODVhNzk4MDktYWM2NS00OTVhLThhMDUtZmQxN2M0ZmFhNjllIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTMyOTA2ODE1Mi00MTI2NjgxOTAtODM5NTIyMTE1LTI3MjMxIiwicmgiOiIwLkFXY0Eyc1RabTBsb1drMm0wMDNzRXRLSGl6c3k1dWNpTW9GRGlVUTAwSGlkS2NCbkFGSS4iLCJzY3AiOiJhY2Nlc3NfYXNfdXNlciIsInN1YiI6IlBvWFZmbmE1dTU1N3VWQUlWMkpDdnlJZVo0dU8wRlhNNGVrSENxMkVnUlkiLCJ0aWQiOiI5YmQ5YzRkYS02ODQ5LTRkNWEtYTZkMy00ZGVjMTJkMjg3OGIiLCJ1bmlxdWVfbmFtZSI6Im5pYy5zdHJvbmdAaXBmeC5jb20iLCJ1cG4iOiJuaWMuc3Ryb25nQGlwZnguY29tIiwidXRpIjoibGpybHBrR1VvMEtvUUlwQ05NSlpBQSIsInZlciI6IjEuMCJ9.ChqdK9RwhpyQYitA3pGBPYbDKqI5A4HaKUXnh5PlOt3wv5rb4-Razd5V-gM-IuHZXnCTm0ZocOq8CYmjeMkcB-tMmYGxnvm6LpPvR_MuZ1_ooSk3M0IA7qw_TiTBqQfffjkS7zlbLrrRs-KUln4nBXOd9F2f4MEoW_S-kCwWvKONVlEe_hHqC57Gy4oPHA1v-_3Pm4ngNNo0LJWFHUXrj76VfjSczro-BMLjp8E3UkkAn4jWjxT9q9miDDLnkrC_spik_Q7bG5K0ZHKLtQA7_DtUdg0ckceq_O0bQ_0GjCL3Zb3TkR2jqOhzsOBicf2Hc2bLr-extQjToWBVbXlyOQ'

// declare fetcher for paths
const fetcher = Fetcher.for<paths>()

// global configuration
fetcher.configure({
  baseUrl: 'https://presence.staging.ipfx.dev',
  init: {
    headers: {
        'authorization': `Bearer ${token}`,
    },
  },
})

// create fetch operations
const getUserPresence = fetcher.path('/api/UserPresence').method('get').create()


async function main(): Promise<void> {
    const res = await getUserPresence({})
    console.dir(res, {depth: null, colors: true})
}

main()