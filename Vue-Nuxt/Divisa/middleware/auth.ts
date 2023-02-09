export default defineNuxtRouteMiddleware(() => {
    const user = true
    if (user) {
        return navigateTo('/')
    }
});