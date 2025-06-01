/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching'

// Die Variable __WB_MANIFEST wird zur Build-Zeit von Workbox ersetzt
precacheAndRoute(self.__WB_MANIFEST)
