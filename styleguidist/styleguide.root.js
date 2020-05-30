export default previewComponent => {
    // https://vuejs.org/v2/guide/render-function.html
    return {
        render (createElement) {
            return createElement(
                'v-app',
                {
                    props: {
                        id: 'v-app'
                    }
                },
                [createElement(Object.assign(previewComponent))]
            )
        }
    }
};
