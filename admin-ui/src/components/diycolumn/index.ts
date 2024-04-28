import type { App } from 'vue'
const modules = import.meta.glob('./*.(tsx|vue)', { eager: true })

const components: any = []
for (const path in modules) {
    const comp = modules[path].default
    components.push(comp)
}

const install = (Vue: App) => {
    components.forEach((component: any) => {
        Vue.component(component.name, component)
    });
}

export default {
    install
}