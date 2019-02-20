import Typography from "typography"
// import grandViewTheme from "typography-theme-grand-view"

const config = {
    title: '2019eecamp',
    baseFontSize: '16px',
    googleFonts: [
        {
            name: 'Noto Sans TC',
            styles: [
            ],
        }
    ],
    headerFontFamily: ['Noto Sans TC'],
    bodyFontFamily: ['Noto Sans TC'],
    includeNormalize: true
}
const typography = new Typography(config)

export default typography