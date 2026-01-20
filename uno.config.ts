import { defineConfig, presetIcons } from "unocss";



export default defineConfig({
    presets: [
        presetIcons({
            scale: 0.75,
            customizations: {
                transform(svg, collection, icon) {
                    // Adjust viewBox for all icons
                    return svg.replace(/viewBox="0 0 \d+ \d+"/, 'viewBox="0 0 36 36"')
                    // Or target specific collections
                    // if (collection === 'carbon') {
                    //     return svg.replace(/viewBox="[^"]*"/, 'viewBox="2 2 28 28"')
                    // }
                    return svg
                }
            }
        }),
    ]
})
