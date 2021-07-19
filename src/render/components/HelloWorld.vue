<template>
    <div class="flex flex-col min-h-screen pb-12 bg-gray-50">
        <main
            class="flex flex-col justify-center flex-grow w-full px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8"
        >
            <div class="flex justify-center flex-shrink-0">
                <img class="w-auto h-32" src="../assets/logo.png" alt="Icon Formu" />
            </div>
            <div class="py-16">
                <div class="text-center">
                    <h1 class="text-3xl font-semibold tracking-tight text-blue-900 sm:text-4xl">
                        {{ msg }}
                    </h1>
                    <p class="mt-6 text-xl font-medium text-gray-600">
                        Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
                    </p>
                    <div class="mt-10 text-base font-medium tracking-tight text-blue-700">
                        <button
                            @click="count++"
                            class="px-4 py-2 font-bold text-white bg-blue-500 rounded  hover:bg-blue-700"
                        >
                            count is: {{ count }}
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <footer class="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex justify-center space-x-3">
                <a
                    href="https://github.com/riipandi"
                    target="_blank"
                    rel="noopener"
                    class="text-sm font-medium text-blue-500 hover:text-blue-600"
                >
                    Github
                </a>
                <span class="inline-block border-l border-gray-300" aria-hidden="true"></span>
                <a
                    href="https://v3.vuejs.org/guide/introduction.html"
                    target="_blank"
                    rel="noopener"
                    class="text-sm font-medium text-blue-500 hover:text-blue-600"
                >
                    Vue 3 Docs
                </a>
                <span class="inline-block border-l border-gray-300" aria-hidden="true"></span>
                <a
                    href="https://www.electronjs.org/docs"
                    target="_blank"
                    rel="noopener"
                    class="text-sm font-medium text-blue-500 hover:text-blue-600"
                >
                    Electron Docs
                </a>
            </nav>
        </footer>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: () => {
        const count = ref(0)
        return { count }
    }
})
</script>
